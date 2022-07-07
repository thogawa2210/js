"use strict";
exports.__esModule = true;
exports.Employee = exports.Position = void 0;
var Position;
(function (Position) {
    Position[Position["manager"] = 0] = "manager";
    Position[Position["staff"] = 1] = "staff";
})(Position = exports.Position || (exports.Position = {}));
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, dateOfBirth, address, position) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.position = position;
    }
    Employee.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Employee.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Employee.prototype.setDateOfBirth = function (dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    };
    Employee.prototype.setAddress = function (address) {
        this.address = address;
    };
    Employee.prototype.setPosition = function (position) {
        this.position = position;
    };
    return Employee;
}());
exports.Employee = Employee;
