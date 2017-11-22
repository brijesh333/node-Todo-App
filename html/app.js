var fs = require("fs");
var http = require("http");

// var server = http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     var myReadStream = fs.createReadStream('index.html', 'utf8');
//     myReadStream.pipe(res);

// });
// server.listen(3000);
// console.log("server is listening on localhost:3000");

//    JSON response

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    var myObj = {};
    myObj.name = "Brijesh";
    myObj.city = "Bengaluru";
    res.end(JSON.stringify(myObj));
});
server.listen(3000);
console.log("server is listening on localhost:3000");