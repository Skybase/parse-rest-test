var express = require('express');
var rest = require('restler');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());

var parseApiUrl = 'https://api.parse.com/1/';

app.get('/', function(req, res) {
  var url = parseApiUrl.concat('users/AM0KcJcDuT');
  rest.get(url, { headers: {
    'X-Parse-Application-Id': process.env.APP_ID,
    'X-Parse-REST-API-Key': process.env.REST_API_KEY}}).on('complete',
    function(data) {
      res.send(data.username);
    });
});

app.post('/users', function(req, res) {
  var user = req.body;
  /*
  var user = {
    'username': 'skybase',
    'password': '5ky6453',
    'skybase': true
  };
  */
  var userData = JSON.stringify(user);
  var url = parseApiUrl.concat('users');
  rest.post(url, {
    headers: {
      'X-Parse-Application-Id': process.env.APP_ID,
      'X-Parse-REST-API-Key': process.env.REST_API_KEY},
    data: userData
  }).on('complete',function(resp) {
      res.send('Done');
    });
});

app.listen(process.env.PORT || 5000);
