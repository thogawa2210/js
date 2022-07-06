var a = 0;
var b = 1;
var sum = 0;
function fibo(count) {
    // phần cơ sở: điều kiện thoát đệ quy là biến count <= 0
    if (count < 0) {
        return;
    }
    // xử lý logic cơ bản
    sum += a;
    console.log(a);
    var c = b;
    b = a + b;
    a = c;
    // phần đệ quy: gọi lại chính hàm fibo
    fibo(count - 1);
}
fibo(5);
console.log(sum);
