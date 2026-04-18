const express = require("express");
const comboDetailsUtil = require("../../../utils/comboDetailsUtil");
const { supportedOkiTags } = require("../../../../frontend/src/util/envResolverUtilCJS");
const searchableEqualsDetails = comboDetailsUtil.getStringDetailsWithOptions();
const searchableContainsDetails = comboDetailsUtil.getArrayDetailsWithOptions();

const router = express.Router();

router.get("/search-props", async (req, res) => {
  try {
    const searchProps = [];
    searchProps.push({
      name: "setplay/okizeme tags",
      conjunction: " have ",
      values: supportedOkiTags,
    });

    for (var [equalDetailName, equalDetailData] of Object.entries(
      searchableEqualsDetails
    )) {
      searchProps.push({
        name: equalDetailName,
        conjunction: " is ",
        values: equalDetailData.values,
      });
    }

    for (var [equalDetailName, equalDetailData] of Object.entries(
      searchableContainsDetails
    )) {
      searchProps.push({
        name: equalDetailName,
        conjunction: " has ",
        values: equalDetailData.values,
      });
    }

    res.json(searchProps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
