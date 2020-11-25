require("../tools/conn_mongodb")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const timelineSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    time: {
        type: Date
    }
})

const timelineModel = mongoose.model("timeline", timelineSchema)
module.exports = timelineModel