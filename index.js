var http = require('http');
var net = require('net');
var socket = new net.Socket(
    { fd: null,
        allowHalfOpen: false,
        readable: false,
        writable: false
    }
);

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('okay');
})

server.listen(5000);

//socket.connect()