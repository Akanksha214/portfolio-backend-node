const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    address: String,
    phone: Number,
    email: String,
    website:String
});
module.exports = mongoose.model('contact',contactSchema);