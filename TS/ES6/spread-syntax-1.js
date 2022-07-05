function replace(array, from, to, elements) {
    array.splice.apply(array, [from, to - from].concat(elements));
}

let testArray = [1, 2, 100, 100, 6];
let addArr = [3, 4, 5];
// replace(testArray, 2, 4, addArr);
// console.log(testArray);

function copyReplace(array, from, to, elements) {
    return array.slice(0, from).concat(elements).concat(array.slice(to));
}
console.log(copyReplace(testArray, 2, 4, addArr));


let customerOrder = [];
function recordOrders(time) {
    customerOrder.push({time, birds: Array.prototype.slice.call(arguments, 1)});
}
recordOrders(new Date, "coffee", "yogurt", "pizza");
console.log(customerOrder);