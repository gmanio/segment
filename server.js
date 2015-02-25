/**
 * @version: 0.0.1
 * @date : Created 15. 02. 17.
 * @author : RIA Gman.Park
 * @description : Simple Socket IO Canvas
 */

var express =require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

io.on('connection', function(socket){
    socket.emit('welcome',{msg:'welcome Server'});

    socket.on('actUp', function(req){
        io.emit('actUp',{sid : req.sid})
    })

    socket.on('actDn', function(req){
        io.emit('actDn',{sid : req.sid})
    })

    socket.on('startClock', function(){
        io.emit('startClock');
    })

    socket.on('stopClock', function(){
        io.emit('stopClock');
    })
})

var port = Number(process.env.PORT || 3000);

server.listen(port);




