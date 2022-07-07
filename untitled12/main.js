"use strict";
exports.__esModule = true;
var Employee_1 = require("./Employee");
var EmployeeManager_1 = require("./EmployeeManager");
// Khởi tạo trình quản lý
var employeemanager = new EmployeeManager_1.EmployeeManager();
// Khởi tạo nhân sự
var staff1 = new Employee_1.Employee('Thọ', 'Đặng', '22/10/1995', 'Hà Nội', 0);
var staff2 = new Employee_1.Employee('Huy', 'Đỗ', '01/01/1999', 'Hà Đông', 1);
var staff3 = new Employee_1.Employee('Sơn', 'Ngọc', '01/01/1995', 'Thái Nguyên', 1);
// Thêm nhân sự vào danh sách
employeemanager.addEmployee(staff1);
employeemanager.addEmployee(staff2);
employeemanager.addEmployee(staff3);
employeemanager.addEmployee(staff1);
// Xem nhân sự
employeemanager.showStaff(0);
// Xóa nhân sự
employeemanager.deleteEmployee(3);
employeemanager.showList();
// Chỉnh sửa nhân sự
employeemanager.editEmployee(1, 'Kiên', 'Trần', '02/02/1995', 'Hải Dương', 0);
employeemanager.showList();
