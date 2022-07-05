// Before use spread operator
// function sum(x, y, z) {
//     return x + y + z;
// }
//
// const numbers = [1, 2, 3];
// console.log(sum.apply(null, numbers));

// After use spread operator
// function sum(x, y, z) {
//     return x + y + z;
// }
//
// const numbers = [1, 2, 3];
// console.log(sum(...numbers));
//
// let a = [1, 2];
// let b= [1,2,3];
// a.push(...b);
// console.log(a);
//
// let obj1={a:1, b:2};
// let obj2 = {...obj1};
// console.log(obj2);

var a = [1,2];
var b = [3,4,5];
var c = [...a,...b];
console.log(c);