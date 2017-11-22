var count = function(arr) {
    return 'There are ' + arr.length + ' Elements in array';
}

var adder = function(a, b) {
    return `addition of two number is ${a+b}`;
}
var pi = 3.142;

//module.exports.count = count;
//module.exports.adder = adder;
//module.exports.pi = pi;

module.exports = {
    count: count,
    adder: adder,
    pi: pi
}