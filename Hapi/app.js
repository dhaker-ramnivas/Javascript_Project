

var hapi=require('hapi');
var server=new hapi.Server();
server.connection({
  port:3000,
  host:'localhost'
});

server.register(require('inert'), (err) => {
  
      if (err) {
          throw err;
      }
  
      server.route({
          method: 'GET',
          path: '/hello',
          handler: function (request, reply) {
            console.log("happ")
              reply.file('./public/index.html');
          }
      });
  });
server.start((err)=>{
  if(err) throw err;
  console.log("server started")
});