const mongoose = require('mongoose');

const blogsSchema = mongoose.Schema({
    date:Date,
    title: String,
    description: String
    
});
module.exports = mongoose.model('blog',blogsSchema);