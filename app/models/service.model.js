const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    title: String,
    description: String
});
module.exports = mongoose.model('service',serviceSchema);