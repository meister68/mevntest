const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var User = new Schema({
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
    username :{
        type: String,
        unique : true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type : Number,
        required: true
    },
    gender :{
        type: String,
        required: true
    }
    
  },{
      collection: 'posts'
  });
  
  User.plugin(uniqueValidator,{ message: 'Error, expected {PATH} to be unique.' });
  
  
  
  module.exports = mongoose.model('User', User);