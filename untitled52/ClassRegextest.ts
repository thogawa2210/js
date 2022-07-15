import {ClassRegex} from "./ClassRegex";

let accountRegex = new ClassRegex();

let validAccount: string[] = ["C0318G", "A1111H", "P2987I"];
let invalidAccount: string[] = ["M0318G", "P0323A", 'C01010K', 'A5678N', 'C000M'];

for (let account of validAccount) {
    let isvalid: boolean = accountRegex.validate(account);
    console.log("Class is " + account + " is valid: " + isvalid);
}
for (let account of invalidAccount) {
    let isvalid: boolean = accountRegex.validate(account);
    console.log("Class is " + account + " is valid: " + isvalid);
}