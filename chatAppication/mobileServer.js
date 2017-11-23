var express    = require('express');        // call express
var app        = express();  
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment=require('moment');
var port = process.env.PORT || 1234;


app.get('/',function(req,res){
    res.send("Welcome to my socket");
});


io.on('connection', function (socket) {
var userName;
    console.log('one user connected : '+socket.id);
    socket.on("name",data=>{
        console.log(data);
        userName=data;
    })

    // when the client emits 'new message', this listens and executes
    socket.on('chat message', function (data) {
        // we tell the client to execute 'new message'
        console.log('this is message :',data);
        socket.emit("chat message" , moment().calendar()+" "+<h1>userName</h1>+"    "+data)
    });
    socket.on('disconnect', function(){
      
      console.log(socket.id+" user disconnect:" )

    

    });

});


http.listen(port, function () {
  console.log('Server listening at port %d', port);
});