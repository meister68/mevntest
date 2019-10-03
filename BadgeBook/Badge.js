const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var Badge = new Schema({
    name: {
      type: String,
      required: true
    },
   
    description: {
        type: String,
        required: true
    },
    issued :{
        type: Date,
        
    }
});
  
  Badge.plugin(uniqueValidator,{ message: 'Error, expected {PATH} to be unique.' });
  
  
  module.exports = mongoose.model('Org', Badge);