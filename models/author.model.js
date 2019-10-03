const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
var Author = new Schema({
  name: {
    type: String
  }
});





module.exports = mongoose.model('Author', Author);