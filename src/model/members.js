const mongoose = require('mongoose')
const member = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    department: {
        type: String,
        required: true,
    },
    batch: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    about: {
        type: String,
    },
    time: {
        type: Date,
        default: Date.now,
    },
    facebook: {
        type: String,
    },
    linkedin: {
        type: String,
    },
    twitter: {
        type: String,
    },
    instagram: {
        type: String,
    },
    github: {
        type: String,
    },
    website: {
        type: String,
    },

})


module.exports = mongoose.model('member', member);
