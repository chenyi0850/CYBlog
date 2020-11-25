require("../tools/conn_mongodb")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    time: {
        type: String,
        require: true
    },
    collectedUsers: []
})

const articleModel = mongoose.model("article", articleSchema)
module.exports = articleModel