var http = require('http');
var dt = require('./myModules/myfirstmodule');    // import self make module from folder "modules"

// create a server object
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});  // write a response to the client
    res.write("The date and time currently: " + dt.myDateTime()); // implementing the imported modules
    res.write(req.url); // 
    res.end('Hello World!!');   // end the response
}).listen(8080); // the server object listens on port 8080