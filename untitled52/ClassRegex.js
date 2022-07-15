"use strict";
exports.__esModule = true;
exports.ClassRegex = void 0;
var ClassRegex = /** @class */ (function () {
    function ClassRegex() {
        this.CLASS_REGEX = /^[ACP]\d{4,4}[GHIKLM]$/;
    }
    ClassRegex.prototype.validate = function (regex) {
        return this.CLASS_REGEX.test(regex);
    };
    return ClassRegex;
}());
exports.ClassRegex = ClassRegex;
