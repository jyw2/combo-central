const express = require("express");
const comboDetailsUtil = require("../../../utils/comboDetailsUtil");
const { supportedOkiTags } = require("../../../../frontend/src/util/envResolverUtilCJS");
const Combo = require("../../../models/combo");
const User = require("../../../models/user");
const searchableEqualsDetails = comboDetailsUtil.getStringDetailsWithOptions();
const searchableContainsDetails = comboDetailsUtil.getArrayDetailsWithOptions();

const router = express.Router();

router.get("/", async (req, res) => {
  const charId = req.query.charid;
  const userId = req.query.userid;
  const likes = req.query.likes;
  const page = req.query.page ?? 1;
  const sortBy = req.query.sort;
  const sortByDirection = req.query.sortdirection;

  if (userId) delete req.query.userid;
  if (sortBy) delete req.query.sort;
  if (sortByDirection) delete req.query.sortdirection;
  delete req.query.charId;

  queryFilterList = [];

  if (charId) queryFilterList.push({ charId: { $eq: charId } });

  if (userId && userId != "") {
    if (likes && charId) {
      likedCombos =
        (await User.findOne({ external_id: { $eq: userId } }).setOptions({ sanitizeFilter: true }))?.likes?.get(
          charId
        ) ?? [];

      queryFilterList.push({ _id: { $in: likedCombos } });
    } else {
      queryFilterList.push({ ownerId: { $eq: userId } });
    }
  }

  const charActions =
    res.locals.comboActionCombiner.getFlatPresetIdsSetForChar(charId);
  Object.entries(req.query).forEach(([subject, value]) => {
    if (typeof value !== "string") {
      // array of filters
      for (var val of value) {
        addSearchTermFilter(
          subject,
          val,
          queryFilterList,
          searchableEqualsDetails,
          searchableContainsDetails,
          charActions,
          supportedOkiTags
        );
      }
    } else {
      addSearchTermFilter(
        subject,
        value,
        queryFilterList,
        searchableEqualsDetails,
        searchableContainsDetails,
        charActions,
        supportedOkiTags
      );
    }
  });
  if (queryFilterList <= 0) {
    res
      .status(400)
      .json({ message: "not enough filters set. result set is too large" });
    return;
  }

  console.log("COMBO_GET_FILTERS:", queryFilterList);

  try {
    let sortQuery = null;
    let sortByDirectionInt = sortByDirection ?? -1;
    switch (sortBy) {
      case "Likes":
        sortQuery = { likes: sortByDirectionInt };
        break;
      case "Date":
        sortQuery = { createdDate: sortByDirectionInt };
        break;
      default:
        sortQuery = {likes: -1};
    }
    console.log("SORTING_QUERY: ", sortQuery);
    const pageCount = 5;

    // Note sanitization filter not needed here as values are transformed from
    // the query only if they come from specific sets.
    const data = await Combo.find({ $and: queryFilterList })
      .sort(sortQuery)
      .skip(pageCount * (page - 1))
      .limit(pageCount);

    const resCount = await Combo.countDocuments({ $and: queryFilterList });

    const publicData = data.map((c) => {
      const combo = c.toObject();
      delete combo.liked_by;
      return combo;
    });

    res.json({
      count: Math.ceil(resCount / pageCount) || 1,
      combos: publicData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

function addSearchTermFilter(
  subject,
  value,
  queryFilterList,
  searchableEqualsDetails,
  searchableContainsDetails,
  charActions,
  okiTerms
) {
  if (!subject || typeof value !== "string") return;

  subject = subject.toLowerCase();

  if (
    subject in searchableEqualsDetails &&
    searchableEqualsDetails[subject].values.includes(value)
  ) {
    // searchable single combo details
    const category = searchableEqualsDetails[subject].category;
    const path = `details.${category}.${subject.replace(" ", "_")}`;
    // KINDA WEIRD TO HAVE TO FORMAT THE DETAIL SUBJECT STRINGS...

    const filter = {};
    filter[path] = value;

    queryFilterList.push(filter);
  } else if (
    subject in searchableContainsDetails &&
    searchableContainsDetails[subject].values.includes(value)
  ) {
    // searchable array combo details
    if (value === "all") {
      for (var valueOption of Object.values(
        searchableContainsDetails[subject].values
      )) {
        if (valueOption !== "all") {
          const category = searchableContainsDetails[subject].category;
          const path = `details.${category}.${subject.replace(" ", "_")}`;

          const filter = {};
          filter[path] = valueOption;

          queryFilterList.push(filter);
        }
      }
    } else {
      const category = searchableContainsDetails[subject].category;
      const path = `details.${category}.${subject.replace(" ", "_")}`;

      const filter = {};
      filter[path] = value;

      queryFilterList.push(filter);
    }
  } else if (subject === "setplay/okizeme tags" && okiTerms.includes(value)) {
    queryFilterList.push({
      "oki.tags": value,
    });
  } else if (charActions.has(value)) {
    // searchable combo actions
    switch (subject) {
      case "starts with action":
        queryFilterList.push({
          "comboPieces.0.presetId": {
            $eq: value,
          },
        });
        return;
      case "ends with action":
        queryFilterList.push({
          $expr: {
            $eq: [
              {
                $getField: {
                  input: { $arrayElemAt: ["$comboPieces", -1] },
                  field: "presetId",
                },
              },
              value,
            ],
          },
        });
        return;
      case "contains action":
        queryFilterList.push({
          comboPieces: {
            $elemMatch: { presetId: { $eq: value } },
          },
        });
        return;
      case "without action":
        queryFilterList.push({
          comboPieces: {
            $not: { $elemMatch: { presetId: { $eq: value } } },
          },
        });
        return;
    }
  }
}

module.exports = router;
