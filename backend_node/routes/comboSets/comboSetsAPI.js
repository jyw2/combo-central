const express = require("express");
const router = express.Router();

const createComboSetRoute = require("./endpoints/createComboSet")
const getComboSetByIdRoute = require("./endpoints/getComboSetById")
const getComboSetBySearchRoute = require("./endpoints/getComboSetBySearch")
const updateComboSetRoute = require("./endpoints/updateComboSet")

router.use("/", createComboSetRoute)
router.use("/", getComboSetBySearchRoute)
router.use("/", getComboSetByIdRoute)
router.use("/", updateComboSetRoute)

module.exports = router;
