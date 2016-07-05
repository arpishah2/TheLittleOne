var express = require('express');
var app = express();
var Parse = require('parse/node').Parse;
var ParseServer = require('parse-server').ParseServer;


var api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017', // Connection string for your MongoDB database
  appId: 'myAppId',
  masterKey: 'myMasterKey', // Keep this key secret!
  serverURL: 'http://localhost:1337/parse', // Don't forget to change to https if needed
  javaScriptKey: 'myJsKey'
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

var port = process.env.PORT || 1337;
/*var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('parse-server-example running on port ' + port + '.');
});

*/

app.listen(port, function() {
  console.log('parse-server-example running on port 1337.');
});


/*
var databaseUri = "mongodb://127.0.0.1:27017"
var api = new ParseServer({
  databaseURI: databaseUri,
  //cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
  appId: process.env.APP_ID || 'app',
  masterKey: process.env.MASTER_KEY || 'master', //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'http://localhost:1337/parse',  // Don't forget to change to https if needed
  liveQuery: {
    classNames: ["Posts", "Comments"] // List of classes to support for query subscriptions
  }
});
*/
