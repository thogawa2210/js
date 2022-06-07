function sum() {
    let a = +document.getElementById("soluong").value;
    let b = 0;
    let c = document.getElementById("from").value;
    let d = document.getElementById("to").value;
    if(c == "USD") {
        if (d == "VND")
            b = a * 23000;
        else b = a
    }
    else {
        if (d == "VND")
            b = a
        else
            b = a / 23000
    }
    document.getElementById("kq").innerHTML = b;
}
