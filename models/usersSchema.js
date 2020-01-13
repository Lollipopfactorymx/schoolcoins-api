const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true,
        default: 0
    },
    age: {
        type: Number,
        required: true,
        default: 12
    }
});

module.exports = mongoose.model('User', usersSchema);
