"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
var arr = 'able was I ere  saw elba';
var stack = new Stack_1.Stack();
var queue = new Queue_1.Queue();
for (var i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
    queue.enqueue(arr[i]);
}
var isSymmetry = true;
for (var i = 0; i < arr.length; i++) {
    if (stack.pop() !== queue.dequeue()) {
        isSymmetry = false;
    }
}
if (isSymmetry) {
    console.log('Chuỗi là đối xứng');
}
else {
    console.log('Chuỗi không đối xứng');
}
