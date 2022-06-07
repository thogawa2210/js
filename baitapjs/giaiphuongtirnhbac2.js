function tinh() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    let d;
    let x;
    let x1
    let x2
    d = b * b - 4 * a * c;
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                document.getElementById("kq").innerHTML = "Phuong trinh vo so nghiem";
            } else {
                document.getElementById("kq").innerHTML = "Phuong trinh vo nghiem"
            }
        } else {
            x = -c / b;
            document.getElementById("kq").innerHTML = "Phuong trinh co nghiem x = " + x.toFixed(2);
        }
    }
    else{
        if (d < 0) {
            document.getElementById("kq").innerHTML = "Phuong trinh vo nghiem"
        }
        else if (d = 0) {
            x = -b / (2 * a)
            document.getElementById("kq").innerHTML = "Phuong trinh co nghiem kep x1=x2= " + x.toFixed(2)
        }
        else{
            x1 = (-b + Math.sqrt(d)) / (2 * a)
            x2 = (-b - Math.sqrt(d)) / (2 * a)
            document.getElementById("kq").innerHTML = "Phuong trinh co hai nghiem doc lap la: " + "x1 = " + x1.toFixed(2) + " va x2= " + x2.toFixed(2)
        }
    }
}