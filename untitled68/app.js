const array = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];

let date = new Date();

for(let i = 0; i < array.length; i++) {
    if(date.getDay() === i){
        console.log(` Hôm nay là thứ ${array[i]}`);
    }
}