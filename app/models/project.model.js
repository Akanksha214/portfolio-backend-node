const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: String,
    description: String,
    link:String,
    image:Array
});
module.exports = mongoose.model('project',projectSchema);