const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pin: Number,
    phone: Number
});

const userModel = mongoose.model('user', userSchema, 'users');
module.exports = userModel;
