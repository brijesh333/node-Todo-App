var fs = require("fs");

var readMe = fs.readFileSync("readMe.txt", "utf8");

//fs.unlink("writeMe.txt");
fs.writeFileSync("writeMe.txt", readMe);
//console.log(readMe);
fs.appendFile("writeMe.txt", " this is appended text");

fs.readFile("readMe.txt", "utf8", function(err, data) {
    console.log(data);
})