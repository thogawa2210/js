import {Employee, Position}  from "./Employee";
import {EmployeeManager} from "./EmployeeManager";

// Khởi tạo trình quản lý
let employeemanager = new EmployeeManager();

// Khởi tạo nhân sự
let staff1 = new Employee('Thọ', 'Đặng', '22/10/1995', 'Hà Nội', 0);
let staff2 = new Employee('Huy','Đỗ', '01/01/1999', 'Hà Đông', 1)
let staff3 = new Employee('Sơn','Ngọc', '01/01/1995', 'Thái Nguyên', 1);

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
employeemanager.editEmployee(1,'Kiên','Trần', '02/02/1995', 'Hải Dương', 0);
employeemanager.showList();
