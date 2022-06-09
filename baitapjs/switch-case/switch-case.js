function ngay(){
    let n = document.getElementById("n").value;
    let ketqua;
    switch (n) {
        case("1"):
        case("3"):
        case("5"):
        case("7"):
        case("8"):
        case("10"):
        case("12"):
            ketqua = "Tháng " + n + " có 31 ngày"
            break
        case("2"):
            ketqua = "Tháng 2 có 28 hoặc 29 ngày"
            break
        case("4"):
        case("6"):
        case("9"):
        case("11"):
            ketqua = "Tháng " + n + " có 30 ngày"
            break
        default:
            ketqua = "Không có tháng này"
    }
    document.getElementById("kq").innerHTML = ketqua
}