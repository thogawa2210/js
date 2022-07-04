// Example 6: Use the spread operator with array destructuring.
const numbers = [3,5,7,8,9];
// Here we assign a,b and c with 3,5 and 7,
// the rest of the elements will all go to others
const [a,b,c,...others] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(others);