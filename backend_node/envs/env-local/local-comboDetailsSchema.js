const mongoose = require('mongoose');

const { basicOpinionsSchema, opponentStateString, screenPosString, worksOnString} = require("../../models/commonComboActionSchemas")

const hitTypeString = {
    type: String,
    enum: ["counter", "regular", "punish counter"],
    uiType:"string_multi_select"
}
const conditionsSchema = new mongoose.Schema({
    hit_type: [hitTypeString],
    opponent_state: [opponentStateString],
    screen_position: [screenPosString],
    works_on: [worksOnString]
}, {_id: false})

const statsSchema = new mongoose.Schema({
    damage: {type: Number, uiType:"number"},
    super_meter_needed:  {type: Number, uiType:"number"},
    drive_gauge_needed:  {type: Number, uiType:"number"},
}, {_id: false})

const comboDetailsSchema = new mongoose.Schema({
    conditions: conditionsSchema,
    opinions: new mongoose.Schema(basicOpinionsSchema, {_id: false}),
    stats: statsSchema,
}, {_id: false})

module.exports = comboDetailsSchema