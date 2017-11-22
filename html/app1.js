var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var myReadStream = fs.createReadStream('./index.html', 'utf8');
        myReadStream.pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var myReadStream = fs.createReadStream('./contact.html', 'utf8')
        myReadStream.pipe(res);
    } else if (req.url === '/test/:id') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("the id you have passed is  :- " + id);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var myReadStream = fs.createReadStream('./404.html', 'utf8')
        myReadStream.pipe(res);
    }

});
server.listen(3000);