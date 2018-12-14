var express = require('express');
var request = require('request');
var app = express();
app.use('/', function(req, res) {
	/*
    var url = 'http://timeline.infinitex.cn' + req.url;
    console.log(req.url);
    req.pipe(request(url)).pipe(res);
    */
   var url = 'http://timeline.infinitex.cn' + req.url;
   var reg = /^\/api/;
   if(reg.test(req.url)) {
   	req.pipe(request(url)).pipe(res);
   }
});
app.listen(8080);
