const mongoose = require("mongoose");

const kidsFashionSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
        required: true
    },
    percent:{
        type: String,
        required: true
    },
    strikeOutRate:{
        type: String,
        required: true
    },
    originalRate:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("kidsFashion", kidsFashionSchema);