/**
 * @version: 0.0.1
 * @date : Created 15. 02. 17.
 * @author : Rich In Application team. Gman.Park
 * @description : Simple Socket IO Canvas
 */

var express =require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = Number(process.env.PORT || 5000);

app.use('/css', express.static(__dirname + '/src/css'));
app.use('/img', express.static(__dirname + '/src/img'));
app.use('/js', express.static(__dirname + '/src/js'));

app.get('/', function (req, res) {
    var options = {
        root: __dirname + '/src/'
    };
    res.sendFile('index.html', options);
});

app.get('/controller', function (req, res) {
    var options = {
        root: __dirname + '/src/'
    };
    res.sendFile('controller.html', options);
});

server.listen(port);

//make connection
io.sockets.on('connection', function(socket) {
	socket.on('data-changed', function(packet){
        socket.broadcast.emit('data-changed',{
            resData: packet.reqData
        });
    })
});



