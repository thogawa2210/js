"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, email, grade, age) {
        this._name = name;
        this._email = email;
        this._grade = grade;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get grade() {
        return this._grade;
    }
    set grade(value) {
        this._grade = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
exports.Student = Student;
