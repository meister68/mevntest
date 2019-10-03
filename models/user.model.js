const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var User = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
        
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,

    }
});

User.path('username').validate(function (value) {
    if(value.length)
    return false;
  }, 'empty string');
  

User.plugin(uniqueValidator, {
    message: 'Error, expected {PATH} to be unique.'
});

module.exports = mongoose.model('User', User);