'use strict';

var http = require('http');
http.createServer(function (request, response) {
    var os = require('os');
    var networkInterfaces = os.networkInterfaces();
    response.writeHead(200, { 'Content-type': 'text/html' });
    response.write("<pre>"+JSON.stringify(networkInterfaces, undefined, 2)+"</pre>");
    response.end();
}).listen(80);
