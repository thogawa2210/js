"use strict";
exports.__esModule = true;
exports.PhoneNumberRegexRegex = void 0;
var PhoneNumberRegexRegex = /** @class */ (function () {
    function PhoneNumberRegexRegex() {
        this.EMAIL_REGEX = /^\(\d\d\)\-\(0\d{9,9}\)$/;
    }
    PhoneNumberRegexRegex.prototype.validate = function (regex) {
        return this.EMAIL_REGEX.test(regex);
    };
    return PhoneNumberRegexRegex;
}());
exports.PhoneNumberRegexRegex = PhoneNumberRegexRegex;
