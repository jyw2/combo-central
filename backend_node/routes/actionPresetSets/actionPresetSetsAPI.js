const express = require("express");

const router = express.Router();

router.get("/:charid", async (req, res) => {
  const charid = req.params.charid;
  const charIdIsInvalid = res.locals.comboActionCombiner.getValidCharIds().findIndex((c) => c === charid) === -1
  if (typeof charid !== "string" || charIdIsInvalid ) {
    res.status(400).json({ message: "character id invalid" });
    return
  }

  try {
    res.json(res.locals.comboActionCombiner.getCombinedPresetsForChar(charid));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/names/:charid", async (req, res) => {
  const charid = req.params.charid;
  const charIdIsInvalid = res.locals.comboActionCombiner.getValidCharIds().findIndex((c) => c === charid) === -1
  if (typeof charid !== "string" || charIdIsInvalid ) {
    res.status(400).json({ message: "character id invalid" });
    return
  }

  try {
    res.json(res.locals.comboActionCombiner.getNamesAndIdsForChar(charid));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
