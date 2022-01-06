const mongoose = require('mongoose')
const blog = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('blog', blog)
