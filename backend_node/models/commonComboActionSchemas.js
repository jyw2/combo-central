const { ComboActionCombiner } = require("../modelCombiners/comboActionCombiner");
const comboActionCombiner = new ComboActionCombiner();

const difficultyString = {
    type: String,
    enum: ["easy", "medium", "hard", "almost impossible"],
    uiType:"string_single_select"
}
const optimalityString = {
    type: String,
    enum: ["low", "medium", "high", "extreme"],
    uiType:"string_single_select"
}
const practicalityString = {
    type: String,
    enum: ["very practical", "fairly practical", "not practical"],
    uiType:"string_single_select"
}
const usedString = {
    type: String,
    enum: [
        "every match (BnB)",
        "most matches",
        "situationally",
        "rarely",
        "never"
    ],
    uiType:"string_single_select"
}

const basicOpinionsSchema = {
    difficulty: difficultyString,
    optimality: optimalityString,
    practicality: practicalityString,
    used: usedString,
}

const opponentStateString = {
    type: String,
    enum: ["standing", "crouching", "jumping"],
    uiType:"string_multi_select"
}
const screenPosString = {
    type: String,
    enum: ["midscreen", "corner", "near corner", "cornered"],
    uiType:"string_multi_select"
}
const worksOnString = {
    type: String,
    enum: ["all-characters", ...comboActionCombiner.getValidCharIds()],
    uiType:"character_array"
}

module.exports = {
    difficultyString, optimalityString, practicalityString,
    usedString, basicOpinionsSchema, opponentStateString, screenPosString, worksOnString
}