var http = require("http");
var fs = require("fs");
var myReadFiles = fs.createReadStream("readMe.txt", 'utf8');
var myWriteFiles = fs.createWriteStream("writeMe.txt");

// myReadFiles.on('data', function(chunks) {
//     console.log("New data received");
//     console.log(chunks);
//     myWriteFiles.write(chunk);

// });
myReadFiles.pipe(myWriteFiles);