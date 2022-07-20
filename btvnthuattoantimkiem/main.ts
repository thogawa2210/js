import * as rl from 'readline-sync'
import { StudentManager } from './StudentManager';
import {Student} from "./Student";

let choice = -1;
let studentManager = new StudentManager();

function editStudentByName() {
    let editStudentName = rl.question('Nhập thông tên sinh viên cần chỉnh sửa:');
    let indexEditStudent = studentManager.findIndexStudentByName(editStudentName);
    if (indexEditStudent !== -1) {
        let newName = rl.question('Nhập tên mới:');
        let newEmail = rl.question('Nhập email mới:');
        let newGrade = rl.question('Nhập lớp mới:');
        let newAge = +rl.question('Nhập tuổi mới:');
        let editStudent = new Student(newName, newEmail, newGrade, newAge);
        studentManager.updateStudent(indexEditStudent, editStudent);
    } else {
        console.log('Sinh viên bạn tìm không tồn tại!');
    }
}

function deleteStudentByName() {
    let deleteStudentName = rl.question('Nhập thông tên sinh viên cần xóa:');
    let indexDeleteStudent = studentManager.findIndexStudentByName(deleteStudentName)
    if (indexDeleteStudent !== -1) {
        studentManager.deleteStudent(indexDeleteStudent);
    } else {
        console.log('Sinh viên bạn muốn xóa không tồn tại!')
    }
}

function addNewStudent() {
    console.log('Nhập thông tin sinh viên:');
    let name = rl.question('Nhập tên sinh viên:');
    let email = rl.question('Nhập email sinh viên:');
    let grade = rl.question('Nhập lớp sinh viên:');
    let age = +rl.question('Nhập tuổi sinh viên:');
    let student = new Student(name, email, grade, age);
    studentManager.addStudent(student);
}

do{
    console.log('---Quản lý sinh viên---');
    console.log('1. Nhập thông tin sinh viên');
    console.log('2. Hiển thị thông tin sinh viên');
    console.log('3. Chỉnh sửa thông tin sinh viên');
    console.log('4. Xóa thông tin sinh viên');
    console.log('0. Thoát');
    choice = +rl.question('Nhập lựa chọn của bạn:');
    switch (choice) {
        case 1:{
            addNewStudent();
            break;
        }
        case 2:{
            console.log('Danh sách sinh viên:');
            let students = studentManager.showListStudent();
            for(const student of students) {
                console.log(`${student.name}\t${student.email}\t${student.grade}\t${student.age}`);
            }
            break;
        }
        case 3:{
            editStudentByName();
            break;
        }
        case 4:{
            deleteStudentByName();
            break;
        }default: {
            console.log("Chức năng bạn chọn không có!");
            break;
        }
    }
}while(choice != 0)
