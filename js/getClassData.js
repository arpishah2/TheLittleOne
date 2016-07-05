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

*/

//var k = Parse.Object.extend("Kid");
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
