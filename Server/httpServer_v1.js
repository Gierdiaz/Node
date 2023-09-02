const server = require('http');

server.createServer(function(request, response){
    response.end('node server');
}).listen(5000);  //port