import {Student} from "./Student";

export class StudentManager{

    private studentList:Student[] = [];

    constructor() {
    }

    showListStudent(){
        return this.studentList;
    }

    addStudent(student:Student) {
        this.studentList.push(student);
    }

    updateStudent(index: number, newStudent:Student) {
        this.studentList[index] = newStudent;
    }

    deleteStudent(index: number) {
        this.studentList.splice(index, 1);
    }

    findIndexStudentByName(name:string): number{
        for(let index = 0; index < this.studentList.length; index++) {
            if(this.studentList[index].name === name){
                return index;
            }
        }
        return -1;
    }
}