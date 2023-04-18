const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
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

module.exports = mongoose.model("laptop", laptopSchema);