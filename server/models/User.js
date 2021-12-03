const {Schema, model, ObjectId} = require("mongoose")

const User = new Schema({
    email: {type: String, required: true, unique:true},
    password: {type: String, required:true},
    writtenMessages: {type: Number, default: 0},
    readMessages: {type: Number, default: 0},
    avatar: {type: String},
    lastActiveAt: Date,
    messages: [{type: ObjectId, ref:'Message'}]
})

module.exports = model ('User', User)