var http = require("http");
var server = http.createServer(function(req, res) {
    console.log('request made : ' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("hey are you there");
});
server.listen(3000);
console.log("Server is running on localhost:3000");