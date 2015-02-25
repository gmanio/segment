var net = require('net');

var server = net.createServer(function(c) { //'connection' listener
    console.log('client connected');
});

server.on('error', function (e) {
    if (e.code == 'EADDRINUSE') {
        console.log('Address in use, retrying...');
        setTimeout(function () {
            server.close();
            server.listen(PORT, HOST);
        }, 1000);
    }
});

server.listen(3000, function() { //'listening' listener
    console.log('server bound');
});