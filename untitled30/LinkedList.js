"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var Score_1 = require("./Score");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirst = function (name, score) {
        var studentScore = new Score_1.Score(name, score);
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
            var studentScore = new Score_1.Score(name, score);
            this.tail.next = studentScore;
            this.tail = studentScore;
            this.size++;
        }
    };
    LinkedList.prototype.showList = function () {
        var listScore = [];
        var currentScore = this.head;
        while (currentScore !== null) {
            listScore.push(currentScore.readScore());
            currentScore = currentScore.next;
        }
        return listScore;
    };
    LinkedList.prototype.totalStudentsFail = function () {
        var sum = 0;
        var currentScore = this.head;
        while (currentScore !== null) {
            if (currentScore.score <= 5) {
                sum += 1;
            }
            currentScore = currentScore.next;
        }
        return sum;
    };
    LinkedList.prototype.findByName = function (name) {
        var listStudent = [];
        var currentScore = this.head;
        while (currentScore !== null) {
            if (currentScore.name === name) {
                listStudent.push(currentScore);
            }
            currentScore = currentScore.next;
        }
        return listStudent;
    };
    LinkedList.prototype.listStudentMaxScore = function () {
        var currentScore = this.head;
        var maxScore = currentScore.score;
        var listStudentMaxScore = [];
        while (currentScore !== null) {
            if (currentScore.score > maxScore) {
                maxScore = currentScore.score;
            }
            currentScore = currentScore.next;
        }
        currentScore = this.head;
        while (currentScore !== null) {
            if (currentScore.score === maxScore) {
                listStudentMaxScore.push(currentScore.name);
            }
            currentScore = currentScore.next;
        }
        return listStudentMaxScore;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
