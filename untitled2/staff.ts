class Staff{
    public name: string;
    public email: string;
    public age: number;
    constructor(name:string, email:string,age:number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getName(): string{
        return this.name;
    }
    getEmail(): string{
        return this.email;
    }
    getAge(): number{
        return this.age;
    }
    setName(name:string):void{
        this.name = name;
    }
    setEmail(email:string):void{
        this.email = email;
    }
    setAge(age:number):void{
        this.age = age;
    }
}

let staff = new Staff('Staff1', 'staff@gmail.com', 20);

let nameStaff = staff.getName();

console.log(nameStaff); // Staff 1

staff.setName('Staff 2');

let currentNameStaff = staff.getName();

console.log(currentNameStaff) // Staff 2