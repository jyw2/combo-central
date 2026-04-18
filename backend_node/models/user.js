const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    external_id: { type: String, required: true, unique: true, index: true, dropDups: true },
    username: { type: String, required: true },
    likes: {
        type: Map,
        required: true,
        of: {
            type: [mongoose.ObjectId],
        }
    },
    setLikes: {
        type: Map,
        required: true,
        of: {
            type: [mongoose.ObjectId],
        }
    },
}, { strict: true });

dataSchema.pre('findOneAndUpdate', function (next) {
    this.options.runValidators = true;
    next();
})

module.exports = mongoose.model("user", dataSchema);
