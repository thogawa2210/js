var numbers = [0, 2, 3, 5, 7, 8, 9, 10];
var arrMissing = [];
var i = 0;
while (i < 11) {
    if (numbers.indexOf(i) === -1) {
        arrMissing.push(i);
    }
    i++;
}
console.log(arrMissing);
