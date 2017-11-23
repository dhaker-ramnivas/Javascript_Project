const Hapi = require('hapi');
const Inert = require('inert');                    // [1]
const server = new Hapi.Server();
const Path = require("path")
var port = 0
var dir = "dist"
var dirChanged = false;
process.argv.map(function (argvVal,index) {
  switch(argvVal){
     case "-p":
      port = process.argv[index+1];
     return;
     case "--":
      dir = process.argv[index+1];
      dirChanged = true;
     return;

  }
})
if(port == 0 || isNaN(port)){
  console.log("Invalid Port or Port Not Passed");
  process.exit(1);

}
if(!dirChanged){
  console.log("Warning: No directory passed in the command line using 'dist' by default")
}


server.connection({ port: port });
server.register(Inert, (err) => {                  // [2]
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {                                     // [3]
      directory: {                                 // [3]
        path: Path.join(__dirname, dir),      // [3]
        listing: true                              // [3]
      }                                            // [3]
    }                                              // [3]
  });
});




server.start((err) => {
    if(err){
      console.log(err)
     }
    else{

    console.log(`Server running at: ${server.info.uri}`);
    }
  });
