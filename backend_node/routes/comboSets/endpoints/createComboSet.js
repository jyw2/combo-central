const ComboSet = require("../../../models/comboSet");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const comboSet = new ComboSet({
    charId: req.body.charId,
    comboIds: req.body.comboIds,
    tags: req.body.tags,
    name: req.body.name,
    ownerId: req.decoded_uid,
    keywords: [
      ...req.body.tags.map((t) => t.toLowerCase()),
      ...req.body.name.split(/(\s+)/).map((t) => t.toLowerCase()),
    ],
    createdDate: Date.now(),
    likes: 0,
    liked_by: []
  });

  if (!req.decoded_uid) {
    res.sendStatus(401);
    return;
  }

  try {
    const savedComboSet = await comboSet.save();
    res.status(200).json(savedComboSet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
