const mongoose = require('mongoose');

const sendSchema = mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message:String
});
module.exports = mongoose.model('send',sendSchema);