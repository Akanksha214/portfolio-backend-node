const mongoose = require('mongoose');

const studentsSchema = mongoose.Schema({
    sname: String,
    saddress: String,
    scontact: Number,
    semail:String
});
module.exports = mongoose.model('student',studentsSchema);