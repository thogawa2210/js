var role;
(function (role) {
    role[role["admin"] = 1] = "admin";
    role[role["user"] = 2] = "user";
})(role || (role = {}));
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.setName = function (name) {
        return this.name = name;
    };
    User.prototype.setEmail = function (email) {
        return this.email = email;
    };
    User.prototype.setRole = function (role) {
        return this.role = role;
    };
    User.prototype.getInfo = function () {
        console.log('User name: ' + this.name + ' email: ' + this.email + ' role' + this.role);
    };
    User.prototype.isAdmin = function () {
        if (this.role === 1) {
            return 'là admin';
        }
        else {
            return 'là người dùng bình thường';
        }
    };
    return User;
}());
var user1 = new User('Thọ', 'ddtho@gmail.com', 1);
var user2 = new User('Huy', 'huy@gmail.com', 2);
user1.getInfo();
console.log(user1.isAdmin());
user2.getInfo();
console.log(user2.isAdmin());
