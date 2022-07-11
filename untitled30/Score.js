"use strict";
exports.__esModule = true;
exports.Score = void 0;
var Score = /** @class */ (function () {
    function Score(name, score) {
        this.next = null;
        this.name = name;
        this.score = score;
    }
    Score.prototype.readScore = function () {
        return this.score;
    };
    return Score;
}());
exports.Score = Score;
