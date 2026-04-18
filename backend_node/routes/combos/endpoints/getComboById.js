const express = require("express");
const Combo = require("../../../models/combo");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    let data = await Combo.findById(req.params.id).setOptions({ sanitizeFilter: true });

    if (!data) {
      res.status(404).json({ message: "Combo not found" })
      return
    }

    data = data.toObject();
    delete data.liked_by;

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
