import {PhoneNumberRegexRegex} from "./PhoneNumberRegex";

let phoneNumberRegex = new PhoneNumberRegexRegex();
let validPhongeNumber: string[] = ["(84)-(0978489648)", '(99)-(0904274116)'];
let invalidPhoneNumber: string[] = ["(a8)-(22222222)",'(0)-(0906235325)','(00)(0988666666)'];

for (let phonenumber of validPhongeNumber) {
    let isvalid: boolean = phoneNumberRegex.validate(phonenumber);
    console.log("Phone Number is " + phonenumber + " is valid: " + isvalid);
}

for (let phonenumber of invalidPhoneNumber) {
    let isvalid: boolean = phoneNumberRegex.validate(phonenumber);
    console.log("Phone Number is " + phonenumber + " is valid: " + isvalid);
}