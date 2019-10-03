const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8081;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');

//routes
const postRoute = require('./routes/post.route');
const signup = require('./routes/users.route');
const loginRoute = require('./routes/login.route');

mongoose.Promise = global.Promise;

mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
);

app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/posts', postRoute);

app.use('/register',signup)

app.use('/login',loginRoute)

app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT);
});