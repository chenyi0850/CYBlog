require("../tools/conn_mongodb")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
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
    time: {
        type: String,
        require: true
    },
    comments: {
        content: {
            type: String
        },
        author: {
            type: String
        },
        time: {
            type: String
        }
    }
})

const articleModel = mongoose.model("article", articleSchema)
module.exports = articleModel