let a = 0;
let b = 1;
let sum = 0;
function fibo(count : number){
    // phần cơ sở: điều kiện thoát đệ quy là biến count <= 0
    if(count<0){
        return
    }
    // xử lý logic cơ bản
    sum += a;
    console.log(a);
    let c = b;
    b= a+b;
    a = c;
    // phần đệ quy: gọi lại chính hàm fibo
    fibo(count-1);
}

fibo(5);
console.log(sum);