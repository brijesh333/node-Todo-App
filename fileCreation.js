var fs = require("fs");
// fs.mkdir("dir", function() {
//         fs.readFile("readMe.txt", "utf8", function(err, data) {
//             fs.writeFile("./dir/writeMe.txt", data, function() {

//             })
//         })
//     })
//fs.unlink("./dir/writeMe.txt");
//fs.rmdir("./dir");
fs.readdir("./dir", function(err, files) {
    //console.log(files);
    fs.unlink("./dir/" + files);
})