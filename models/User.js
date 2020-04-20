const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    calories_count: {
        type: Number,
        required: true,
        default: "0"
    },
    accept_challenge: {
        type: Boolean,
        required: true,
        default: "no"
    }
})

module.exports = User = mongoose.model("User", UserSchema);