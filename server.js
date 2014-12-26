var http = require('http');
var url = require('url');
var console = require('console');
var camera = require('./camera.js');

var routes = {
    '/camera/capture': function(request, response){
        console.log('Basic capture');
        camera.capture(function(err, data){
        });
        response.end();
    },
    '/camera/status': function(request, response){
        console.log('Camera status');
        camera.getStatus(function(err, data){
            response.writeHeader(200, {"Content-Type": "text/plain"});
            response.write(data);
            response.end();
        });
    },
    '/camera/config/get': function(request, response){
        console.log('Camera get config');
        var qs = url.parse(request.url, true).query;
        camera.getConfig(qs.variable, function(err, data){
            response.writeHeader(200, {"Content-Type": "text/plain"});
            response.write(data);
            response.end();
        });
    },
    '/camera/config/set': function(request, response){
        console.log('Camera set config');
        var qs = url.parse(request.url, true).query;
        camera.setConfig(qs.variable, qs.value, function(err, data){
            response.writeHeader(200, {"Content-Type": "text/plain"});
            response.write(data);
            response.end();
        });
    },
    '/': function(request, response){
        response.writeHeader(200, {"Content-Type": "text/plain"});
        response.write("Testing things out");
        response.end();
    }
}

function getPostData(request, response, callback){
    if (request.method == 'POST') {
        var body = '';
        request.on('data', function (data) {
            body += data;
            // Too much POST data, kill the connection!
            if (body.length > 1e6)
                request.connection.destroy();
        });
        request.on('end', function () {
            var post = qs.parse(body);
            callback(request, response, post);
        });
    }
}

http.createServer(function(request, response){
    var parsedUrl = url.parse(request.url);
    if (routes.hasOwnProperty(parsedUrl.pathname)){
        routes[parsedUrl.pathname](request, response);
    } else {
        console.log('404 not found');
        response.writeHeader(404, {"Content-Type": "text/plain"});
        response.end();
    }
}).listen(8080);
