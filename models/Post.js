const mongoose = require("mongoose");


const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    descp: {
        type: String,
        required: true,

    },
    username: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false
    },
    categories: {
        type: Array,
        required: true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Post", PostSchema)