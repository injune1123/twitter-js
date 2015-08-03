var _ = require("underscore");
var data = [];
var id = 0;

var add = function (name, text) {
  var id = find({name: name}).length + 1;
  //id++;

  // Remove space between first and last name, to make ID
  //var nextID = "";
  //nameID = name.replace(/\s+/g, '') + id;
  data.push({name: name, text: text, id: id});
  //console.log({name: name, text: text, id: id});
};

var list = function () {
  return _.clone(data);
};

var find = function (properties) {
  //console.log("Looking for properties: ");
  //console.log(Object.keys(properties));
  //console.log(properties["id"]);

  return _.where(data, properties);
  //console.log(6 === properties["id"]);
  //return _.where(data,{id: properties["id"]});
};

// Finds in an already filtered list
var subFind = function (list, properties) {
  return _.where(list, properties);
};


module.exports = {add: add, find: find, subFind: subFind};


var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
  //console.log("Creating random tweet!");
  module.exports.add(getFakeName(), getFakeTweet());
}

module.exports.list = list;

//console.log(data);
