import {Stack} from "./Stack";


let stack = new Stack<number>();

let arr = [0,1,2,3,4,5,6,7,8,9];

for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
}

for (let i = 0; i < arr.length; i++) {
    arr[i] = stack.pop()
}

console.log(arr);