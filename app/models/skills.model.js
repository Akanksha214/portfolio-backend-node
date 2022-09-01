const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    
    title: String,
    totalPercentage: Number,
    lastWeekPercentage: Number,
    lastMonthPercentage: Number,
    
});
module.exports = mongoose.model('skill',skillSchema);