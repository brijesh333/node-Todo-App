var fs = require("fs");
var http = require("http");



var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    var readStream = fs.createReadStream("readMe.txt");

    readStream.pipe(res);

});
server.listen(3000);
console.log("server is running on 3000 port");