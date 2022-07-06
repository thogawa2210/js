enum Gender{
    male= 'nam',
    female= 'nữ',
    other= 'khác'
}

class Staff{
    public name: string;
    public gender: Gender = Gender.other;
    public dob: Date;
    public email: string;
    public phone? : string;
    constructor(name: string, gender: Gender, dob: Date, email: string, phone: string) {
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.email = email;
        this.phone = phone;
    }

}

let staffs : Staff[] = [];

function showStaff(staff: Staff) {
    console.log('Tên nhân viên: '+staff.name+ ' Giới tính: '+ staff.gender+ ' Ngày sinh: '+ staff.dob+ ' Email: '+ staff.email+ ' SĐT: ' + staff.phone);
}

staffs.push(new Staff("Nguyen Van A", Gender.male, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));

staffs.push(new Staff("Tran Thi A", Gender.female, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));


staffs.push(new Staff("Huynh An Nhien", Gender.other, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));

staffs.forEach(showStaff);