const mongoose = require('mongoose')

const alumni = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    current_job: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    passing_year: {
        type: Number,
        required: true,
    },
    time: {
        type: Date,
        default: Date.now,
    },
})

const Alumni = mongoose.model('alumni', alumni)
module.exports = Alumni
