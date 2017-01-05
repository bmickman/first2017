//server without express

var http = require('http');

function onRequest(request, response){
  console.log("made request");
  response.write("blahblahfrom server.js");
  response.end();
}

http.createServer(onRequest).listen(3000);
console.log("server running");
console.log("suup");
