const express = require('express');
const loginRoutes = express.Router();


let User = require('../models/user.model')

loginRoutes.route('/').post(function (req, res) {


    User.findOne({username:req.body.username,password:req.body.password},function(err,user){
        
        if(!user){
            res.status(400).json("unable to save");
            console.log("not found")
        }else{
            res.json("log in")
            console.log("found")
        }
        
        
     });
    
    


});



module.exports = loginRoutes;