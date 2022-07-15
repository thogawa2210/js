"use strict";
exports.__esModule = true;
var PhoneNumberRegex_1 = require("./PhoneNumberRegex");
var phoneNumberRegex = new PhoneNumberRegex_1.PhoneNumberRegexRegex();
var validPhongeNumber = ["(84)-(0978489648)", '(99)-(0904274116)'];
var invalidPhoneNumber = ["(a8)-(22222222)", '(0)-(0906235325)', '(00)(0988666666)'];
for (var _i = 0, validPhongeNumber_1 = validPhongeNumber; _i < validPhongeNumber_1.length; _i++) {
    var phonenumber = validPhongeNumber_1[_i];
    var isvalid = phoneNumberRegex.validate(phonenumber);
    console.log("Phone Number is " + phonenumber + " is valid: " + isvalid);
}
for (var _a = 0, invalidPhoneNumber_1 = invalidPhoneNumber; _a < invalidPhoneNumber_1.length; _a++) {
    var phonenumber = invalidPhoneNumber_1[_a];
    var isvalid = phoneNumberRegex.validate(phonenumber);
    console.log("Phone Number is " + phonenumber + " is valid: " + isvalid);
}
