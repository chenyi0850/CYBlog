require("../tools/conn_mongodb")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const messageSchema = new Schema({
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
    zan: {
        type: Number,
        default: 0
    },
    cai: {
        type:Number,
        default: 0
    },
    zanUsernames: [],
    caiUsernames: [],
    reply: {
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

const messageModel = mongoose.model("message", messageSchema)
module.exports = messageModel