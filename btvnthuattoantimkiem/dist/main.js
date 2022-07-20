"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rl = __importStar(require("readline-sync"));
const StudentManager_1 = require("./StudentManager");
const Student_1 = require("./Student");
let choice = -1;
let studentManager = new StudentManager_1.StudentManager();
function editStudentByName() {
    let editStudentName = rl.question('Nhập thông tên sinh viên cần chỉnh sửa:');
    let indexEditStudent = studentManager.findIndexStudentByName(editStudentName);
    if (indexEditStudent !== -1) {
        let newName = rl.question('Nhập tên mới:');
        let newEmail = rl.question('Nhập email mới:');
        let newGrade = rl.question('Nhập lớp mới:');
        let newAge = +rl.question('Nhập tuổi mới:');
        let editStudent = new Student_1.Student(newName, newEmail, newGrade, newAge);
        studentManager.updateStudent(indexEditStudent, editStudent);
    }
    else {
        console.log('Sinh viên bạn tìm không tồn tại!');
    }
}
function deleteStudentByName() {
    let deleteStudentName = rl.question('Nhập thông tên sinh viên cần xóa:');
    let indexDeleteStudent = studentManager.findIndexStudentByName(deleteStudentName);
    if (indexDeleteStudent !== -1) {
        studentManager.deleteStudent(indexDeleteStudent);
    }
    else {
        console.log('Sinh viên bạn muốn xóa không tồn tại!');
    }
}
function addNewStudent() {
    console.log('Nhập thông tin sinh viên:');
    let name = rl.question('Nhập tên sinh viên:');
    let email = rl.question('Nhập email sinh viên:');
    let grade = rl.question('Nhập lớp sinh viên:');
    let age = +rl.question('Nhập tuổi sinh viên:');
    let student = new Student_1.Student(name, email, grade, age);
    studentManager.addStudent(student);
}
do {
    console.log('---Quản lý sinh viên---');
    console.log('1. Nhập thông tin sinh viên');
    console.log('2. Hiển thị thông tin sinh viên');
    console.log('3. Chỉnh sửa thông tin sinh viên');
    console.log('4. Xóa thông tin sinh viên');
    console.log('0. Thoát');
    choice = +rl.question('Nhập lựa chọn của bạn:');
    switch (choice) {
        case 1: {
            addNewStudent();
            break;
        }
        case 2: {
            console.log('Danh sách sinh viên:');
            let students = studentManager.showListStudent();
            for (const student of students) {
                console.log(`${student.name}\t${student.email}\t${student.grade}\t${student.age}`);
            }
            break;
        }
        case 3: {
            editStudentByName();
            break;
        }
        case 4: {
            deleteStudentByName();
            break;
        }
        default: {
            console.log("Chức năng bạn chọn không có!");
            break;
        }
    }
} while (choice != 0);
