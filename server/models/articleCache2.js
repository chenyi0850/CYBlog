require("../tools/conn_mongodb")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleCache2Schema = new Schema({
    articleId: String,
    content: {
        type: String,
        required: true
    },
    time: {
        type: String,
        require: true
    },
})

const articleCache2Model = mongoose.model("articleCache2", articleCache2Schema)
module.exports = articleCache2Model