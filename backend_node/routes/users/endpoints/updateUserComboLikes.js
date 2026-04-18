const express = require("express");
const router = express.Router();
const User = require("../../../models/user");
const Combo = require("../../../models/combo");

router.put("/:id/:charId/likes", async (req, res) => {
    const userId = req.params.id;
    const charId = req.params.charId;
    const comboId = req.body.comboId;
    const liked = req.body.liked;

    if (typeof userId !== "string" || typeof comboId !== "string") {
        res.status(400).json({ message: "Invalid request args" });
        return
    }

    try {
        if (req.decoded_uid && req.decoded_uid === userId) {
            // private info
            if (liked === true) {
                // Add Likes
                arrayAccessor = `likes.${charId}`;

                const userQuery = {
                    external_id: { $eq: userId },
                };
                userQuery[arrayAccessor] = { $ne: comboId };

                const userCommand = { $push: {} };
                userCommand.$push[arrayAccessor] = comboId;

                await User.findOneAndUpdate(userQuery, userCommand);

                await Combo.findOneAndUpdate(
                    {
                        _id: { $eq: comboId },
                        liked_by: { $ne: userId },
                    },
                    {
                        $push: { liked_by: userId },
                        $inc: { likes: 1 },
                    }
                );

                res.json(liked);
            } else if (liked === false) {
                // Remove like
                const arrayAccessor = `likes.${charId}`;

                const userQuery = {
                    external_id: { $eq: userId },
                };
                userQuery[arrayAccessor] = { $eq: comboId };

                const userCommand = { $pull: {} };
                userCommand.$pull[arrayAccessor] = comboId;

                await User.findOneAndUpdate(userQuery, userCommand);

                await Combo.findOneAndUpdate(
                    {
                        _id: { $eq: comboId },
                        liked_by: { $eq: userId },
                    },
                    {
                        $pull: { liked_by: userId },
                        $inc: { likes: -1 },
                    }
                );

                res.json(liked);
            } else {
                res.status(400).json({ message: "liked must be true or false" });
            }
        } else {
            res.status(403).json({ message: "unauthorized" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
