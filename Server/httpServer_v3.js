'use strict'

const http = require('http')
const host = '127.0.0.1';
const port = 5500;

const server = http.createServer(function(request, response){
    //response.end(request.url);
    //console.log(request);

    response.setHeader("Content-Type","text/plain; charset = utf-8");

    if(request.url == '/'){
        response.end('Initial');
    }else if(request.url == '/home'){
        response.end('Home page')
    }else if(request.url == '/about'){
        response.end('About');
    }else {
        response.end('Page not found.')
    };
});

server.listen(port, host, function(){
    console.log('server running');
});