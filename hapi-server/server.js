

var hapi=require('hapi');
var server =new hapi.Server()
var io=require('socket.io')(server.listener)

server.connection({port:3000,host:"localhost"});

server.register(require('inert'),err=>{
    if(err) throw err;

    server.route({
        path:'/',
        method:'GET',
        handler:(request,reply)=>{
            reply.file('index.html');
        }
    })
})


server.start(err=>{
    if(err) throw err;
    console.log("server started at port : ",server.info.port)
})

var count=0;

io.on("connection",socket=>{
    console.log("new connection stablised");
    socket.emit("count",{count:count});
    socket.on("increase",()=>{
        count++;
    })
})