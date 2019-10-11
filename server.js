var express = require('express')();
var http = require('http').createServer(express);
var path = require('path');


var request = require('request');
var url = "http://localhost:8080/demoapi/resources/rest/1";


// express.get('/', function (req, res) {
//     res.sendFile(path.resolve(__dirname, 'web_app/index.html'));
// });
//
// http.listen(3009, function (req, res) {
//     console.log('listening on *:3009');
// });
//
//
// request(url, function (error, response, body) {
//     console.log(response.body);
//     if (!error && response.statusCode == 200) {
//         // res.send(body);
//         let response_text = jQuery.parseJSON(response.body);
//         console.log(response_text);
//
//
//     }
//
// });

express.get('/get', function(req, res){
  var response_json;
  request(url, function (error, response, body) {
      console.log(response.body);
      if (!error && response.statusCode == 200) {
          // res.send(body);
          let response_text = jQuery.parseJSON(response.body);

          res.send(response);
      }
  });
});
