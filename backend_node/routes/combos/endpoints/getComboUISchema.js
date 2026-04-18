const express = require("express");
const router = express.Router();
const comboDetailsUtil = require("../../../utils/comboDetailsUtil");
const formattedUIDetails = comboDetailsUtil.getFormattedUIDetails();
const { auth, firestoreDB } = require("../../../utils/firebaseUtil")
const fireStoreUsersRef = firestoreDB.collection("analytics")
const { envId } = require("../../../../frontend/src/env");

router.get("/ui-schema", async (req, res) => {
  try {
    // fireStoreUsersRef.doc().set({
    //   type: "site visit",
    //   env: envId,
    //   date: Date.now()
    // })
    res.json(formattedUIDetails)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
