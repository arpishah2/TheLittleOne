var express = require('express');
var app = express();
var Parse = require('parse/node').Parse;
var ParseServer = require('parse-server').ParseServer;

Parse.initialize('myAppId','myJsKey','myMasterKey');

/*
var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017', // Connection string for your MongoDB database
  appId: 'myAppId',
  masterKey: 'myMasterKey', // Keep this key secret!
  serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.listen(1337, function() {
  console.log('parse-server-example running on port 1337.');
});

*/
//Kid class

var Kid = Parse.Object.extend("Kid", {
/*
  addFriend: function(another_kid) {
    var kid = Parse.Kid.current();
    var friendship = kid.relation("friendship");
    friendship.add(another_kid);
    kid.save();
  }
  findFriend: function() {
    var kid = Parse.Kid.current();
    var friendship = kid.relation("friendship");
    friendship.query().find({
      success:function(list) {
      }
    });
  } */

}, {
  // Class methods
  spawn: function(kidsname) {
    var kid = new Kid();
    kid.set("name", kidsname);
    return kid;
  }

});

var k1 = Kid.spawn("Arjun");
var k2 = Kid.spawn("Rushabh");
var k3 = Kid.spawn("Kanav");
var k4 = Kid.spawn("Nitya");
var k5 = Kid.spawn("Jayu");
var k6 = Kid.spawn("Vriti");

console.log("added 6 kids");

var queryObject = new Parse.Query("Kid");

queryObject.find({
    success: function (results) {
        for (var i = 0; i < results.length; i++) {
            // Iteratoration for class object.
            console.log(results[i].get("name"));
            console.log("Hi.....");
        }
    },
    error: function (error) {
        alert("Error: " + error.code + " " + error.message);
    }
});


//Parent class

var Parent = Parse.Object.extend("Parents", {}, {
  // Class methods
  spawn: function(pname,phnno) {
    var par = new Parent();
    par.set("name", pname);
    par.set("phone",phnno);
    return par;
  }
});


var p1 = Parent.spawn("Chintan");
var p2 = Parent.spawn("Devanshi");
var p3 = Parent.spawn("Chitrang");
var p4 = Parent.spawn("Prachi");
var p5 = Parent.spawn("Ilesh");
var p6 = Parent.spawn("Grishma");


/*
//Friends class
var Friend = Parse.Object.extend("Friends", {}, {
  // Class methods
  spawn: function(k1,k2) {
    var friend = new Friend();
    friend.set("name", pname);
    friend.set("name", pname);
    return friend;
  }
  findFriends: function(kid) {
    return kids;
  }
});


*/
