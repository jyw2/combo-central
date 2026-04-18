const express = require("express");
const router = express.Router();

const createComboRoute = require("./endpoints/createCombo")
const getComboByIdRoute = require("./endpoints/getComboById")
const getCombosBySearchRoute = require("./endpoints/getCombosBySearch")
const getSearchPropsRoute = require("./endpoints/getSearchProps")
const updateComboRoute = require("./endpoints/updateCombo")
const getComboUISchema = require("./endpoints/getComboUISchema.js")


router.use("/", createComboRoute)
router.use("/", getComboUISchema)
router.use("/", getSearchPropsRoute)
router.use("/", getCombosBySearchRoute)
router.use("/", getComboByIdRoute)
router.use("/", updateComboRoute)

module.exports = router;
