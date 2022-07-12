import {Stack} from "./Stack";
import {Queue} from "./Queue";


let arr = 'able was I ere I saw elba';

let stack = new Stack();
let queue = new Queue();
for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
    queue.enqueue(arr[i]);
}

let isSymmetry = true;
for (let i = 0; i < arr.length; i++) {
    if(stack.pop() !== queue.dequeue()){
        isSymmetry = false;
    }
}

if(isSymmetry) {
    console.log('Chuỗi là đối xứng');
}else {
    console.log('Chuỗi không đối xứng');
}