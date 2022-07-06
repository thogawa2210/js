var Gender;
(function (Gender) {
    Gender["male"] = "nam";
    Gender["female"] = "n\u1EEF";
    Gender["other"] = "kh\u00E1c";
})(Gender || (Gender = {}));
var Staff = /** @class */ (function () {
    function Staff(name, gender, dob, email, phone) {
        this.gender = Gender.other;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.email = email;
        this.phone = phone;
    }
    return Staff;
}());
var staffs = [];
function showStaff(staff) {
    console.log('Tên nhân viên: ' + staff.name + ' Giới tính: ' + staff.gender + ' Ngày sinh: ' + staff.dob + ' Email: ' + staff.email + ' SĐT: ' + staff.phone);
}
staffs.push(new Staff("Nguyen Van A", Gender.male, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
staffs.push(new Staff("Tran Thi A", Gender.female, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));
staffs.push(new Staff("Huynh An Nhien", Gender.other, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));
staffs.forEach(showStaff);
