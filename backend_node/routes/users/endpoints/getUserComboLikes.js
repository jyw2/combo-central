const express = require("express");
const router = express.Router();
const User = require("../../../models/user");

router.get("/:id/:charId/likes", async (req, res) => {
    const id = req.params.id;
    const charId = req.params.charId;

    try {
        if (req.decoded_uid === id) {
            // private info
            const data = await User.findOne({ external_id: { $eq: id } }).setOptions({ sanitizeFilter: true });
            res.json(data.likes?.get(charId) ?? []);
        } else {
            // public info
            res.status(403).json({ message: "unauthorized" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
