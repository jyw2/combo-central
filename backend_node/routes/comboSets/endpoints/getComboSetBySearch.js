const ComboSet = require("../../../models/comboSet");
const Combo = require("../../../models/combo");
const User = require("../../../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/search", async (req, res) => {
  const charId = req.query.charid;
  const userId = req.query.userid;
  const tags = req.query.tags;
  const page = req.query.page ?? 1;
  const likes = req.query.likes;
  const sortBy = req.query.sort;
  const sortByDirection = req.query.sortdirection;

  try {
    const query = { charId: { $eq: charId } };

    if (typeof userId !== "string") {
      res.status(400).json({ message: "bad request" });
      return
    }

    if (userId) {
      if (likes && charId) {
        likedComboSets =
          (await User.findOne({ external_id: { $eq: userId } }).setOptions({ sanitizeFilter: true }))?.setLikes?.get(
            charId
          ) ?? [];

        query._id = { $in: likedComboSets };
      } else {
        query.ownerId = { $eq: userId };
      }
    } else {
      query.comboIds = { $ne: [] }
    }

    if (tags && tags.length > 0) {
      let formattedTags = tags;

      if (typeof tags === "string") formattedTags = [tags];

      query.keywords = { $all: formattedTags };
    }

    let sortQuery = null;
    let sortByDirectionInt = sortByDirection ?? -1;
    switch (sortBy.toLowerCase()) {
      case "likes":
        sortQuery = { likes: sortByDirectionInt };
        break;
      case "date":
        sortQuery = { createdDate: sortByDirectionInt };
        break;
      default:
        sortQuery = { likes: -1 };;
    }

    const pageCount = 5;
    let comboSets = await ComboSet.find(query)
      .sort(sortQuery)
      .skip(pageCount * (page - 1))
      .limit(pageCount);

    const resCount = await ComboSet.countDocuments(query);

    let fullComboSets = [];
    for (let comboSet of comboSets) {
      // Get full combo data
      const comboIds = comboSet.comboIds
        .slice(0, 3)
        .map((ele) => new mongoose.Types.ObjectId(ele));
      const combos = await Combo.find({ _id: { $in: comboIds } });

      comboSet = comboSet.toObject();
      delete comboSet.liked_by;
      comboSet.firstThreeCombos = combos;

      fullComboSets.push(comboSet);
    }

    res.json({
      count: Math.ceil(resCount / pageCount) || 1,
      comboSets: fullComboSets,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
