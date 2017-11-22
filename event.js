var event = require("events");

var myEmitter = new event.EventEmitter();

myEmitter.on('someEvent1', function() {
    console.log("first event emitted");
    myEmitter.emit('someEvent2');
});

myEmitter.on('someEvent2', function() {
    console.log("second event emitted");
});

myEmitter.emit('someEvent1');