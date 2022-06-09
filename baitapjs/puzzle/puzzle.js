let a = document.getElementById("a").innerHTML;
let b = document.getElementById("b").innerHTML;
let c = document.getElementById("c").innerHTML;
let d = document.getElementById("d").innerHTML;
function aa() {
    if (a == 1) {
        a = 5;
        document.getElementById("a").innerHTML = a;
    }else if (a == 5) {
        a = "9";
        document.getElementById("a").innerHTML = a;
    }else{
        a = "1";
        document.getElementById("a").innerHTML = a;
    }
}
function bb() {
    if (b == 2) {
        b = 6;
        document.getElementById("b").innerHTML = b;
    }else if (b == 6) {
        b = "10";
        document.getElementById("b").innerHTML = b;
    }else{
        b = "2";
        document.getElementById("b").innerHTML = b;
    }
}
function cc() {
    if (c == 3) {
        c = 7;
        document.getElementById("c").innerHTML = c;
    }else if (c == 7) {
        c = 11;
        document.getElementById("c").innerHTML = c;
    }else{
        c = "3";
        document.getElementById("c").innerHTML = d;
    }
}
function dd() {
    if (d == 4) {
        d = 8;
        document.getElementById("d").innerHTML = d;
    }else if (d == 8) {
        d = 12;
        document.getElementById("d").innerHTML = d;
    }else{
        d = 4;
        document.getElementById("d").innerHTML = d;
    }
}
function kq() {
    if (a == 1 && b == 2 && c == 3 && d == 4) {
        document.getElementById("kq").innerHTML = "BINGO"
    }else if (a == 5 && b == 6 && c == 7 && d == 8) {
        document.getElementById("kq").innerHTML = "BINGO"
    }else if (a == 9 && b == 10 && c == 11 && d == 12) {
        document.getElementById("kq").innerHTML = "BINGO"
    }else
        document.getElementById("kq").innerHTML = "Hay thu lai"
}