 const express = require('express');
 const signUp = express.Router();

//require models

 let User = require('../models/user.model')

signUp.route('/').post(function (req, res) {
    let user = new User(req.body)
    console.log(user)
    user.save(function(err){
        console.log(err.name)
        if(err){
            res.status(400).send("unable to save");
            console.log('user already exists')
        }else{
            res.json("successfully saved")
        }
        
    
    });
    


  });



  module.exports = signUp;