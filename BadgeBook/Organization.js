const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var Organization = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
       match: /\S+@\S+\.\S+/
    },
    password: {
        type: String,
        required: true
    },
    Address :{
        type: String,
        required: true
    },
    contactNumber:{
        type: Number,
        required: true
    }

    
  });
  
  Organization.plugin(uniqueValidator,{ message: 'Error, expected {PATH} to be unique.' });
  
  
  module.exports = mongoose.model('Org', Organization);