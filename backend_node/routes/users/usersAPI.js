const express = require("express");
const router = express.Router();
const createUserRoutes = require("./endpoints/createUser");
const getUserByIdRoute = require("./endpoints/getUserById")
const getUserComboLikesRoute = require("./endpoints/getUserComboLikes")
const getUserSetLikesRoute = require("./endpoints/getUserSetLikes")
const updateUserSetLikesRoute = require("./endpoints/updateUserSetLikes")
const updateUserComboLikesRoute = require("./endpoints/updateUserComboLikes")

router.use("/", createUserRoutes)
router.use("/", getUserByIdRoute)
router.use("/", getUserComboLikesRoute)
router.use("/", getUserSetLikesRoute)
router.use("/", updateUserSetLikesRoute)
router.use("/", updateUserComboLikesRoute)

module.exports = router;
