const mongoose = require("mongoose");

const recentSaleSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    rate:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("recentSale",recentSaleSchema);