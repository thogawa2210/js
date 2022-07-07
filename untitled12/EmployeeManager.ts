export class EmployeeManager {
    private employees = []
    constructor(){

    }
    showList(){
        let stt = 0;
        for( let i in this.employees ){
            stt +=1;
            console.log(stt + '. Fullname: ' + this.employees[i].lastName + ' ' + this.employees[i].firstName
            + ' Ngày sinh: ' + this.employees[i].dateOfBirth + ' Địa chỉ: ' + this.employees[i].address
            + ' Vị trí: ' + this.employees[i].position);
        }
    }
    addEmployee(employee){
        this.employees.push(employee);
    }
    showStaff(i){
        console.log('Fullname: ' + this.employees[i].lastName + ' ' + this.employees[i].firstName
            + ' Ngày sinh: ' + this.employees[i].dateOfBirth + ' Địa chỉ: ' + this.employees[i].address
            + ' Vị trí: ' + this.employees[i].position)
    }
    deleteEmployee(i){
        this.employees.splice(i,1);
    }
    editEmployee(i, firstName,lastName, dateOfBirth,address,position){
        this.employees[i].setFirstName(firstName);
        this.employees[i].setLastName(lastName);
        this.employees[i].setDateOfBirth(dateOfBirth);
        this.employees[i].setAddress(address);
        this.employees[i].setPosition(position);
    }

}