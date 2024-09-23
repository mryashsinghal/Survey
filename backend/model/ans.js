const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Answer = new Schema({
    
    data: Object

});

module.exports = mongoose.model('Ans',Answer);
