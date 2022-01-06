const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sae_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const users = require('./users.js');