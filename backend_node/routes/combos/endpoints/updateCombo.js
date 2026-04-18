const express = require("express");
const Combo = require("../../../models/combo");
const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Combo.findOneAndUpdate(
      { _id: id, ownerId: req.decoded_uid },
      updatedData,
      options
    ).setOptions({ sanitizeFilter: true });

    if (result === null || !req.decoded_uid) {
      res
        .status(403)
        .json({ message: "cannot edit combo, user is not the owner" });
      return;
    }
    res.status(200).json({ _id: id });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "Update failed" });
  }
});

module.exports = router;
