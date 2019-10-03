const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

// Define collection and schema for Post
var Post = new Schema({
  title: {
    type: String,
    unique : true
  },
  body: {
    type: Number,

  }
},{
    collection: 'posts'
});

Post.plugin(uniqueValidator,{ message: 'Error, expected {PATH} to be unique.' });



module.exports = mongoose.model('Post', Post);