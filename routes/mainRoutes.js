const express = require("express");

const mongoose = require('mongoose');
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const session = require('express-session');
const bodyParser = require('body-parser')
const router = express.Router();
var path = require('path');

router.use(express.static('public'));
router.use(bodyParser.json());
const User = require("../models/userModel");
const quotesCollection = "";

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
*/
router.post("/signup", [ ],
    async (req, res) => {
        const { 
              sur_name,
              given_name,
              date_of_birth,
              residence,
              occupation,
              ids,
              nationality,
              gender,
              category
        } = req.body;

        var userx = new User({ 
              sur_name:req.body.sur_name,
              given_name:req.body.given_name,
              date_of_birth:req.body.date_of_birth,
              residence:req.body.residence,
              occupation:req.body.occupation,
              ids:req.body.ids,
              nationality:req.body.nationality,
              gender:req.body.gender,
              category:req.body.category});
         
        userx.save(function (err) {
          if (err)  return res.status(500).json({ msg: err.message });
        });

        return await res.status(200).json({
                    msg: 'user was saved',
                    user: userx
                });


    }
);

module.exports = router;
