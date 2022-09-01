const mongoose = require('mongoose');

const aboutSchema = mongoose.Schema({
    
    description: String,
    name:String,
    dateOfBirth:String,
    address:String,
    zipCode:Number,
    emailId:String,
    phone:Number,
    tags:Array,
    image:Array

});
module.exports = mongoose.model('about',aboutSchema);