const Schema = require('mongoose').Schema;

const userSchema = new Schema({
    name: String,
    pin: Number
});

const userModel = mongoose.model('user', userSchema, usersHistory);
module.exports = userSchema;
