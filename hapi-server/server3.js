var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 6000, labels: ['api'] });
server.connection({ port: 6001, labels: ['chat'] });

var io = require('socket.io')(server.select('chat').listener);

io.on('connection', function (socket) {

    socket.emit('Oh hii!');

    socket.on('burp', function () {
        socket.emit('Excuse you!');
    });
});

server.start();