const mongoose = require("mongoose");
const { ComboActionCombiner } = require("../modelCombiners/comboActionCombiner");
const comboActionCombiner = new ComboActionCombiner();

const dataSchema = new mongoose.Schema(
    {
        charId: { type: String, required: true, enum: comboActionCombiner.getValidCharIds() },
        comboIds: {
            type: [mongoose.ObjectId],
            required: true
        },
        tags: {
            type: [String],
            required: true
        },
        name: { type: String, required: true },
        ownerId: { type: String, required: true, index: true },
        keywords: {
            type: [String],
            required: true
        },
        createdDate: { type: Number, required: true },
        likes: { type: Number, required: true },
        liked_by: { type: ["string"], required: true }
    },
    { strict: true }
);


dataSchema.pre('findOneAndUpdate', function (next) {
    this.options.runValidators = true;
    next();
})


module.exports = mongoose.model("ComboSet", dataSchema);
