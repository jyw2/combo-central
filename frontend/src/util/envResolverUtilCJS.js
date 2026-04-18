const { envId } = require("../env");
const { supportedButtons,
    supportedOkiTags, } = require(`../envs/${envId}-env/${envId}-gameConfig`)

module.exports = {
    supportedButtons,
    supportedOkiTags,
}
