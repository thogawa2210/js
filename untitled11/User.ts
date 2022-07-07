enum role{
    admin = 1,
    user = 2
}

class User{
    protected name: string;
    protected email: string;
    public role: role;
    constructor(name: string, email: string,role: role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    setName(name: string) {
        return this.name = name;
    }
    setEmail(email: string) {
        return this.email = email;
    }
    setRole(role: role) {
        return this.role = role;
    }
    getInfo(){
        console.log('User name: ' + this.name + ' email: ' + this.email + ' role' + this.role);
    }
    isAdmin(){
        if(this.role === 1){
            return 'là admin';
        }else{
            return 'là người dùng bình thường'
        }
    }
}

let user1 = new User('Thọ', 'ddtho@gmail.com', 1);
let user2 = new User('Huy', 'huy@gmail.com', 2);

user1.getInfo();
console.log(user1.isAdmin());
user2.getInfo();
console.log(user2.isAdmin());
