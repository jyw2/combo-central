const ComboSet = require("../../../models/comboSet");
const express = require("express");
const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const comboSet = await ComboSet.findOneAndUpdate(
      { _id: req.params.id, ownerId: req.decoded_uid },
      {
        comboIds: req.body.comboIds,
        tags: req.body.tags,
        keywords: [
          ...req.body.tags.map((t) => t.toLowerCase()),
          ...req.body.name.split(/(\s+)/).map((t) => t.toLowerCase()),
        ],
        name: req.body.name,
        // description: req.body.description,
      }
    ).setOptions({ sanitizeFilter: true });

    console.log(req.body.comboIds);

    if (!comboSet) {
      res.sendStatus(401);
    } else {
      res.sendStatus(200);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
