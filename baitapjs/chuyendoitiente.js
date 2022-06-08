function sum() {
    let a = +document.getElementById("soluong").value;
    let b;
    let c = document.getElementById("from").value;
    let d = document.getElementById("to").value;
    let e;
    switch (c) {
        case "USD":
            e = a*23000
            break
        case "VND":
            e = a*1
            break
        case "AUD":
            e = a*17000
            break
        case "EUR":
            e = a*25000
            break
        case "JPY":
            e = a*178
            break
        case "GBP":
            e = a*29800
            break
        case "CHF":
            e = a*24000
            break
        case "CAD":
            e = a*19000
            break
    }
    switch (d){
        case "VND":
            b = e
            break
        case "USD":
            b = e/23000
            break
        case "AUD":
            b = e/17000
            break
        case "EUR":
            b = e/25000
            break
        case "JPY":
            b = e/178
            break
        case "GBP":
            b = e/29800
            break
        case "CHF":
            b = e/24000
            break
        case "CAD":
            b = e/19000
            break
    }

    document.getElementById("kq").innerHTML = b;
}
