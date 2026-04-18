const express = require("express");
const Combo = require("../../../models/combo");
const User = require("../../../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ external_id: { $eq: req.decoded_uid } }).setOptions({ sanitizeFilter: true });

    if (!user || !req.decoded_uid) {
      res.status(403).json({ message: "Invalid user. Could not create combo" })
      return
    }

    if (req.body.demoLink && req.body.demoLink.indexOf("https://") !== 0){
      req.body.demoLink = "https://" + req.body.demoLink
    }

    const combo = { ...req.body, createdDate: Date.now(), likes: 0 };

    const data = new Combo(combo);
    const dataToSave = await data.save();

    res.status(200).json({ _id: dataToSave._id });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "Creation failed" });
  }
});


module.exports = router;
