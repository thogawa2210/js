"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var Salary_1 = require("./Salary");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirst = function (name, score) {
        var studentScore = new Salary_1.Node(name, score);
        studentScore.next = this.head;
        this.head = studentScore;
        if (!this.tail) {
            this.tail = studentScore;
        }
        this.size++;
    };
    LinkedList.prototype.insertLast = function (name, score) {
        if (!this.head) {
            this.insertFirst(name, score);
        }
        else {
            var studentScore = new Salary_1.Node(name, score);
            this.tail.next = studentScore;
            this.tail = studentScore;
            this.size++;
        }
    };
    LinkedList.prototype.showList = function () {
        var listSalary = [];
        var currentSalary = this.head;
        while (currentSalary !== null) {
            listSalary.push(currentSalary.month, currentSalary.salary);
            currentSalary = currentSalary.next;
        }
        return listSalary;
    };
    LinkedList.prototype.totalSalary = function () {
        var sum = 0;
        var currentSalary = this.head;
        while (currentSalary !== null) {
            sum += currentSalary.salary;
            currentSalary = currentSalary.next;
        }
        return sum;
    };
    LinkedList.prototype.findMonthHaveBestSalary = function () {
        var currentSalary = this.head;
        var maxSalary = currentSalary.salary;
        var listMonth = [];
        while (currentSalary !== null) {
            if (currentSalary.salary > maxSalary) {
                maxSalary = currentSalary.salary;
            }
            currentSalary = currentSalary.next;
        }
        currentSalary = this.head;
        while (currentSalary !== null) {
            if (currentSalary.salary === maxSalary) {
                listMonth.push(currentSalary.month);
            }
            currentSalary = currentSalary.next;
        }
        return listMonth;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
