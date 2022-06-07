function cong() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c;
    c = a + b;
document.getElementById("kq").innerHTML = c
}
function tru() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c;
    c = a - b;
    document.getElementById("kq").innerHTML = c
}
function nhan() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c;
    c = a * b;
    document.getElementById("kq").innerHTML = c
}
function chia() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c;
    c = a / b;
    document.getElementById("kq").innerHTML = c
}