"use strict";
exports.__esModule = true;
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
}
for (var i = 0; i < arr.length; i++) {
    arr[i] = stack.pop();
}
console.log(arr);
