var express = require('express');
var app = express();
var rest = require('restler');

app.get('/', function(req, res) {
  rest.get('https://api.parse.com/1/users/AM0KcJcDuT', { headers: {
    'X-Parse-Application-Id': process.env.APP_ID,
    'X-Parse-REST-API-Key': process.env.REST_API_KEY}}).on('complete', function(data) {
  res.send(data.username);
});
});

app.listen(5000);
