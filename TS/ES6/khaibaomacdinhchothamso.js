function lastIndexOf(arr, elt, start=arr.length) {
    for (let i = start - 1; i >= 0; i--)
        if (arr[i] === elt) return i
    return -1
}
console.log(lastIndexOf([1, 2, 3, 2,10,9,8,3,5], 3));

