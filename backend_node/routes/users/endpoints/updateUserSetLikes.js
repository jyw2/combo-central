const express = require("express");
const router = express.Router();
const User = require("../../../models/user");
const ComboSet = require("../../../models/comboSet");

router.put("/:id/:charId/set-likes", async (req, res) => {
    const userId = req.params.id;
    const charId = req.params.charId;
    const comboSetId = req.body.comboSetId;
    const liked = req.body.liked;
    
    if (typeof userId !== "string" || typeof comboSetId !== "string") {
        res.status(400).json({ message: "Invalid request args" });
        return
    }

    try {
        if (req.decoded_uid === userId) {
            // private info
            if (liked === true) {
                // Add Likes
                arrayAccessor = `setLikes.${charId}`;

                const userQuery = {
                    external_id: { $eq: userId },
                };
                userQuery[arrayAccessor] = { $ne: comboSetId };

                const userCommand = { $push: {} };
                userCommand.$push[arrayAccessor] = comboSetId;

                await User.findOneAndUpdate(userQuery, userCommand);

                const comboQuery = {
                    _id: { $eq: comboSetId },
                    liked_by: { $ne: userId },
                };

                const comboCommand = {
                    $push: { liked_by: userId },
                    $inc: { likes: 1 },
                };

                await ComboSet.findOneAndUpdate(comboQuery, comboCommand);

                res.json(liked);
            } else if (liked === false) {
                // Remove like
                const arrayAccessor = `setLikes.${charId}`;

                const userQuery = {
                    external_id: { $eq: userId },
                };
                userQuery[arrayAccessor] = { $eq: comboSetId };

                const userCommand = { $pull: {} };
                userCommand.$pull[arrayAccessor] = comboSetId;

                await User.findOneAndUpdate(userQuery, userCommand);

                const comboQuery = {
                    _id: { $eq: comboSetId },
                    liked_by: { $eq: userId },
                };

                const comboCommand = {
                    $pull: { liked_by: userId },
                    $inc: { likes: -1 },
                };

                await ComboSet.findOneAndUpdate(comboQuery, comboCommand);

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
