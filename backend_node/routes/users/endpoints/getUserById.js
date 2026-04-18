const express = require("express");
const router = express.Router();
const User = require("../../../models/user");

router.get("/:id", async (req, res) => {
  id = req.params.id;

  try {
    const data = await User.findOne({ external_id: { $eq: id } }).setOptions({ sanitizeFilter: true });
    if (!data) {
      res.status(404).json({ message: "No user with that id" });
      return
    }

    if (req.decoded_uid === id) {
      // private info
      res.json(data);
    } else {
      // public info
      res.json({
        username: data.username
      }); // just return id and display name?
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
