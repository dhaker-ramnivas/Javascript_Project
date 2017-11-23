var Hapi = require('hapi');

// Make an event emitter for managing communication
// between hapi and socket.io code

var EventEmitter = require('events');
var notifier = new EventEmitter();

// Setup API + WS server with hapi

var server = new Hapi.Server();
server.register(require('inert'), function () {});

server.connection({ port: 5000, labels: ['api'] });
server.connection({ port: 5001, labels: ['ws'] });

var apiServer = server.select('api');
var wsServer = server.select('ws');

apiServer.route({
   method: 'GET',
   path: '/',
   handler: function (request, reply) {

       reply('index.html');
   }
});

apiServer.route({
   method: 'GET',
   path: '/action',
   handler: function (request, reply) {

       notifier.emit('action', { time: Date.now() });
       reply.file("index6.html");
   }
});

// Setup websocket stuff

var io = require('socket.io')(wsServer.listener);
// io.on('connection', function (socket) {

//    // Subscribe this socket to `action` events
//    notifier.on('action', function (action){

//        socket.emit('action', action.time);
//    });
// });
var count=0;
var userList=[];
io.on('connection', function (socket) {

    notifier.on('action', function (action){
        console.log(action)
    });
        console.log(socket);
        

    socket.emit('Chat message', 'welcome to the chat' );
    socket.on('Chat message', function (data) {
        console.log(data)
        io.emit('Chat message', data);
    });
    socket.on("user",user=>{
        console.log(user)
    })

    socket.on('disconnect', function(){
        console.log('user disconnected');
        count--;
    });

});

server.start(function () {
   console.log('Server started');
});