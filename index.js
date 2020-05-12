const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient
const session = require('express-session');
const passport = require('passport');
const server = express();

server.use(bodyParser.json());
server.use(express.static('public'));
var path = require('path');
server.use(bodyParser.urlencoded({ extended: true }));

const User = require("./models/userModel");
var   usercollection = '';


const db = encodeURI("mongodb+srv://d8paul:ixsv9u3XWU6EqGiP@cluster0-xtjuo.mongodb.net/test?retryWrites=true&w=majority");
const client = new MongoClient(db, { useUnifiedTopology: true,useNewUrlParser: true});
client.connect(err => {
  usercollection = client.db("users").collection("appusers");
  console.log('Connected to Database');
  // perform actions on the collection object
  //client.close();
});


server.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/views', 'index.html'));  
});



server.post('/patient/signup', 
	[ ], (req, res) => {
     usercollection.insertOne(req.body)
    .then(result => {
      return result.status(200).json({
                    msg: 'user was saved'
                });
    })
    .catch(error => {
       console.log('error while saving');
    });

   }
);

// Listener
server.listen(3000, function() {
    console.log('listening on Port: 3000')
});







