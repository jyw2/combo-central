const express = require("express");
const router = express.Router();

const User = require("../../../models/user");
const { auth, firestoreDB } = require("../../../utils/firebaseUtil")
const fireStoreUsersRef = firestoreDB.collection("users")

router.post("/", async (req, res) => {
    // Adds a display name to the Firebase user and creats an ENV (DB) user

    if (!req.decoded_uid) {
        res.status(500).json({ message: "No firebase user found with that external id" });
        return
    } else if (
        !isUsernameValid(req.body.username)
    ) {
        res.status(500).json({ message: "username is invalid" });
        return
    } else if (
        !(await isUsernameAvailable(req.body.username))
    ) {
        res.status(500).json({ message: "Username is taken" });
        return
    }


    try {
        await fireStoreUsersRef.doc(req.decoded_uid).set({
            displayName: req.body.username
        })
    } catch (e) {
        res.status(500).json({ message: "Failed to add user to uniqueness table" });
        return
    }

    try {
        let user = await auth.getUser(req.decoded_uid)
        if (user.displayName) {
            res.status(500).json({ message: "User already has a username" });
            return
        }
        await auth.updateUser(req.decoded_uid, { displayName: req.body.username })
    } catch (e) {
        res.status(500).json({ message: "Failed to update username" });
        return
    }

    return await createEnvUser(req, res)
});

router.post("/env", async (req, res) => {
    // Make sure a firebase entry exists and an existing user does not already exist

    return await createEnvUser(req, res)
});

async function isUsernameAvailable(name) {
    return (await fireStoreUsersRef.where('displayName', '==', name).get()).empty
}

function isUsernameValid(name) {
    return (
        typeof name === "string" &&
        name &&
        name.length <= 24 &&
        name.indexOf(" ") === -1
    )
}

async function createEnvUser(req, res) {
    try {
        if (!req.decoded_uid) {
            res.status(500).json({ message: "No firebase user found with that external id" });
            return
        } else if (await User.findOne({ external_id: { $eq: req.decoded_uid } }).setOptions({ sanitizeFilter: true })) {
            res.status(500).json({ message: "User with that external id already exists" });
            return
        }

        let FBuser = await auth.getUser(req.decoded_uid)

        if (!FBuser.displayName) {
            res.status(500).json({ message: "Firebase user has no display name" });
            return
        }

        const user = {
            external_id: req.decoded_uid,
            username: FBuser.displayName,
            likes: {},
            setLikes: {}
        };

        const userData = new User(user);
        const dataToSave = await userData.save();
        res.status(200).json({ username: user.username });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = router;
