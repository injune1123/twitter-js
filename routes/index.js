var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');


router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  //console.log("Tweets: " + tweets);
  res.render( 'index', {title: 'Twitter.js', tweets: tweets, showForm: true  });
});


router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find({name: name});
  console.log("List length: " + list.length);
  res.render( 'index', {title: 'Twitter.js - Posts by '+name, tweets: list, showForm: true, username: name});
});


router.get('/users/:name/tweets/:id', function(req, res) {
  var name = req.params.name;
  var reqID = 1*req.params.id;
  //var nameID = "";
  //nameID = name.replace(/\s+/g, '') + reqID;
  var nameList = tweetBank.find({name: name})
  var list = tweetBank.subFind(nameList, {id: reqID});
  //console.log("Found list: " + list.length);
  res.render('index', {title: 'Twitter.js - Posts by ' + name, tweets: list});
});


router.post('/submit', function(req, res) {
  console.log(req.body)
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});


module.exports = function (io) {
  // ...
  // route definitions, etc.
  // ...
  return router;
};