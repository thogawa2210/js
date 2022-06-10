function tinh(){
    let a = +document.getElementById("a").value;
    if(a<50){
        b = a*1600;
        document.getElementById("kq").innerHTML = "Mức tiêu thụ của bạn đang ở bậc 1. Số tiền phải trả là: "+ b +"VNĐ";
    }else if(a<100){
        b = 50*16000 + (a-50)*1700;
        document.getElementById("kq").innerHTML = "Mức tiêu thụ của bạn đang ở bậc 2. Số tiền phải trả là: "+ b +"VNĐ";
    }else if(a<200){
        b = 50*1600 + 50*1700 + (a-100)*2000;
        document.getElementById("kq").innerHTML = "Mức tiêu thụ của bạn đang ở bậc 3. Số tiền phải trả là: "+ b +"VNĐ";
    }else if(a<300){
        b = 50*1600 + 50*1700 + 100*2000 + (a-200)*2500;
        document.getElementById("kq").innerHTML = "Mức tiêu thụ của bạn đang ở bậc 4. Số tiền phải trả là: "+ b +"VNĐ";
    }else if(a<400){
        b = 50*1600 + 50*1700 + 100*2000 + 100*2500 + (a-300)*2800;
        document.getElementById("kq").innerHTML = "Mức tiêu thụ của bạn đang ở bậc 5. Số tiền phải trả là: "+ b +"VNĐ";
    }else {
        b = 50 * 1600 + 50 * 1700 + 100 * 2000 + 100*2500 + 100*2800+ (a - 400) * 2900;
        document.getElementById("kq").innerHTML = "Mức tiêu thụ của bạn đang ở bậc 6. Số tiền phải trả là: " + b + "VNĐ";
    }
}