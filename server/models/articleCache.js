require("../tools/conn_mongodb")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleCacheSchema = new Schema({
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

const articleCacheModel = mongoose.model("articleCache", articleCacheSchema)
module.exports = articleCacheModel