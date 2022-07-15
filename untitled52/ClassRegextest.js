"use strict";
exports.__esModule = true;
var ClassRegex_1 = require("./ClassRegex");
var accountRegex = new ClassRegex_1.ClassRegex();
var validAccount = ["C0318G", "A1111H", "P2987I"];
var invalidAccount = ["M0318G", "P0323A", 'C01010K', 'A5678N', 'C000M'];
for (var _i = 0, validAccount_1 = validAccount; _i < validAccount_1.length; _i++) {
    var account = validAccount_1[_i];
    var isvalid = accountRegex.validate(account);
    console.log("Class is " + account + " is valid: " + isvalid);
}
for (var _a = 0, invalidAccount_1 = invalidAccount; _a < invalidAccount_1.length; _a++) {
    var account = invalidAccount_1[_a];
    var isvalid = accountRegex.validate(account);
    console.log("Class is " + account + " is valid: " + isvalid);
}
