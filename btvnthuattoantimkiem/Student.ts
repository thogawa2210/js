export class Student{
    private _name:string;
    private _email:string;
    private _grade:string;
    private _age:number;

    constructor(name:string, email:string, grade:string, age:number) {
        this._name = name;
        this._email = email;
        this._grade = grade;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get grade(): string {
        return this._grade;
    }

    set grade(value: string) {
        this._grade = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }
}