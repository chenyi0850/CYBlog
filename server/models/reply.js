require("../tools/conn_mongodb")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const replySchema = new Schema({
    id: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    toAuthor: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    },
    zan: {
        type: Number,
        default: 0
    },
    cai: {
        type:Number,
        default: 0
    },
    zanUsernames: [],
    caiUsernames: []
})

const replyModel = mongoose.model("reply", replySchema)
module.exports = replyModel