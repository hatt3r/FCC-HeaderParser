// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

//whoami path
app.get('/api/whoami', function(req, res) {
  //req data is stored in a {} array called headers
  const { headers } = req;
  //response json will contain key ipaddress from request that is req.ip
  //language key and value would be found in headers key "accept-language"
  //software key and value would be found in headers key "user-agent"
  res.json({ ipaddress: req.ip, language: headers["accept-language"],software: headers["user-agent"] });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
