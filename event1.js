var event = require("events");
var util = require("util");

var person = function(name) {
    this.name = name;
}

util.inherits(person, event.EventEmitter);

var a = new person("a");
var b = new person("b");

var people = [a, b];

people.forEach(function(person) {
    person.on('speak', function(msg) {
        console.log(person.name + " : " + msg);
    })
});

a.emit('speak', "hi");
b.emit('speak', "hello");