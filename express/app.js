var express = require('express');
var app = express();

var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

// app.use("/assets", function(req, res, next) {
//     console.log(req.url);
//     next();
// })
app.use("/assets", express.static('assets'));

app.get("/", function(req, res) {
    //res.sendFile(__dirname + "/index.html");
    res.render('index');
});
app.get("/contact", function(req, res) {
    console.log(req.query);
    //res.send("this is contact page");
    res.render('contact', { qs: req.query });
});

app.get('/profile/:name', function(req, res) {
    var data = { name: 'Brijesh', age: 25, hobbies: ['fighting', 'reading', 'writting'] };
    res.render('profile', { person: req.params.name, data: data });
    //res.send("your id is :- " + req.params.id);
});

app.post("/contact", urlencodedParser, function(req, res) {
    console.log(req.body);
});
app.listen(3000);