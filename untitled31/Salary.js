"use strict";
exports.__esModule = true;
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(name, score) {
        this.next = null;
        this.month = name;
        this.salary = score;
    }
    Node.prototype.readSalary = function () {
        return this.salary;
    };
    return Node;
}());
exports.Node = Node;
