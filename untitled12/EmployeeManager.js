"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.employees = [];
    }
    EmployeeManager.prototype.showList = function () {
        var stt = 0;
        for (var i in this.employees) {
            stt += 1;
            console.log(stt + '. Fullname: ' + this.employees[i].lastName + ' ' + this.employees[i].firstName
                + ' Ngày sinh: ' + this.employees[i].dateOfBirth + ' Địa chỉ: ' + this.employees[i].address
                + ' Vị trí: ' + this.employees[i].position);
        }
    };
    EmployeeManager.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    EmployeeManager.prototype.showStaff = function (i) {
        console.log('Fullname: ' + this.employees[i].lastName + ' ' + this.employees[i].firstName
            + ' Ngày sinh: ' + this.employees[i].dateOfBirth + ' Địa chỉ: ' + this.employees[i].address
            + ' Vị trí: ' + this.employees[i].position);
    };
    EmployeeManager.prototype.deleteEmployee = function (i) {
        this.employees.splice(i, 1);
    };
    EmployeeManager.prototype.editEmployee = function (i, firstName, lastName, dateOfBirth, address, position) {
        this.employees[i].setFirstName(firstName);
        this.employees[i].setLastName(lastName);
        this.employees[i].setDateOfBirth(dateOfBirth);
        this.employees[i].setAddress(address);
        this.employees[i].setPosition(position);
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
