const { envId } = require("../env");
const { supportedButtons,
    supportedOkiTags,
    characterData,
    gameData,
    suggestedPiecePlayerStates,
    envListOverride } = require(`../envs/${envId}-env/${envId}-gameConfig`)
const { ButtonRenderProvider } = require(`../envs/${envId}-env/comboRendering/renderProviders/${envId}-buttonRenderProvider`)
const { MotionRenderProvider } = require(`../envs/${envId}-env/comboRendering/renderProviders/${envId}-motionRenderProvider`)
const { collapsePairs } = require(`../envs/${envId}-env/comboRendering/${envId}-collapsePairs`)
const rootPath = `envs/${envId}-env`

export {
    supportedButtons,
    supportedOkiTags,
    characterData,
    gameData,
    suggestedPiecePlayerStates,
    envListOverride,
    ButtonRenderProvider, MotionRenderProvider, collapsePairs, rootPath
}
