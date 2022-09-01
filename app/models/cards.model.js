const mongoose = require('mongoose');

const cardsSchema = mongoose.Schema({
    title: String,
    description: String,
    contact: Number,
    address:String
});
module.exports = mongoose.model('cards',cardsSchema);