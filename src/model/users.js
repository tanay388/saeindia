const mongoose = require('mongoose')

const users = new mongoose.Schema({
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
    password: {
        type: String,
        required: true,
    },
  
    phone: {
        type: Number,
    },
    description: {
        type: String,
    },
    time: {
        type: Date,
        default: Date.now,
    },
})


const Users = mongoose.model('users', users);

const x = new Users({
    name: 'sae',
    email: 'ad@gm.com',
    password: '123',
    is_student: true,
    phone: 123,
    description: 'sae',
})

x.save().then((result) => {
  console.log(result)
    
}).catch((err) => {
    console.log(err)
});

module.exports = Users;