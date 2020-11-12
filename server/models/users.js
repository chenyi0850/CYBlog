require("../tools/conn_mongodb")
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    phoneNum: {
        type: String
    }
})

const userModel = mongoose.model("user", userSchema)
module.exports = userModel