const ComboSet = require("../../../models/comboSet");
const Combo = require("../../../models/combo");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const comboSetData = await ComboSet.findById(req.params.id).setOptions({ sanitizeFilter: true });

    if (!comboSetData) {
      res.status(404).json({ message: "Combo set not found" });
      return
    }

    // Get full combo data
    const comboIds = comboSetData.comboIds.map(
      (ele) => new mongoose.Types.ObjectId(ele)
    );
    const combos = await Combo.find({ _id: { $in: comboIds } });

    const comboSet = comboSetData.toObject();
    comboSet.combos = combos;
    delete comboSet.liked_by;

    res.json(comboSet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
