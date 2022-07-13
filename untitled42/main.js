var matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];
var sum = 0;
function setPriceForAvailableRoom(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                if (i < matrix.length - 1) {
                    matrix[i + 1][j] = 0;
                }
            }
        }
    }
}
function sumPriceAvailable(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
    }
}
function matrixElementsSum(matrix) {
    setPriceForAvailableRoom(matrix);
    sumPriceAvailable(matrix);
    return sum;
}
matrixElementsSum(matrix);
console.log(sum);
