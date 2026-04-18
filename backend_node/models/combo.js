const mongoose = require('mongoose');
const { ComboActionCombiner } = require("../modelCombiners/comboActionCombiner");
const comboActionCombiner = new ComboActionCombiner();
const { supportedButtons, supportedOkiTags } = require("../../frontend/src/util/envResolverUtilCJS");
const { comboDetailsSchema } = require("../utils/envResolverUtil")

const commentSchema = new mongoose.Schema({
    text: String
}, { _id: false })

const okiSchema = new mongoose.Schema({
    tags: {
        type: [String],
        enum: supportedOkiTags
    },
    notes: commentSchema
}, { _id: false })

const supportedButtonsSchema = {
    type: String,
    enum: supportedButtons
}

const comboInputSchema = new mongoose.Schema({
    buttons: {
        type: [[supportedButtonsSchema]],
        required: true
    },
    command: {
        type: [String],
        required: true
    }
}, { _id: false })

const comboPieceSchema = new mongoose.Schema({
    name: String,
    playerState: [String],
    presetId: String,
    tips: String,
    input: [[comboInputSchema]]
}, { _id: false })


const dataSchema = new mongoose.Schema({
    ownerId: { type: String, required: true, index: true },
    comboPieces: {
        type: [comboPieceSchema],
        required: true
    },
    comment: commentSchema,
    oki: { type: okiSchema },
    demoLink: String,
    name: { type: String, required: true },
    charId: { type: String, required: true, enum: comboActionCombiner.getValidCharIds() },
    createdDate: Number,
    likes: Number,
    details: comboDetailsSchema,
    liked_by: [String]
}, { strict: true })

dataSchema.pre('findOneAndUpdate', function (next) {
    this.options.runValidators = true;
    next();
})

module.exports = mongoose.model('Combo', dataSchema)