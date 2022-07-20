"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = void 0;
class StudentManager {
    constructor() {
        this.studentList = [];
    }
    showListStudent() {
        return this.studentList;
    }
    addStudent(student) {
        this.studentList.push(student);
    }
    updateStudent(index, newStudent) {
        this.studentList[index] = newStudent;
    }
    deleteStudent(index) {
        this.studentList.splice(index, 1);
    }
    findIndexStudentByName(name) {
        for (let index = 0; index < this.studentList.length; index++) {
            if (this.studentList[index].name === name) {
                return index;
            }
        }
        return -1;
    }
}
exports.StudentManager = StudentManager;
