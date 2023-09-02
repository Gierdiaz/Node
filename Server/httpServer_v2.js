'use strict'

const http = require('http');
const host = 'localhost';
const port = 5000;

const server = http.createServer(function(request, response){
    response.end('Server is running.')
}).listen(port, host, function(){
    console.log('server running.')
});