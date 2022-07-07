export enum Position{
    manager,
    staff ,
}

export class Employee{
    firstName: string
    lastName: string
    dateOfBirth: string
    address: string
    position: Position
    constructor(firstName: string, lastName: string, dateOfBirth: string, address: string, position: Position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.position = position;
    }
    setFirstName(firstName: string) {
        this.firstName = firstName;
    }
    setLastName(lastName: string) {
        this.lastName = lastName;
    }
    setDateOfBirth(dateOfBirth: string) {
        this.dateOfBirth = dateOfBirth;
    }
    setAddress(address: string) {
        this.address = address;
    }
    setPosition(position: Position){
        this.position = position;
    }
}
