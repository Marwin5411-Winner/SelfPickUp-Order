const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    clientInform: {
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        pin: {
            type: String,
            required: true
        }
    },
    items: {
        type: Array,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});