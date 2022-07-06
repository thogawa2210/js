class Subject{
    constructor(name,score){
        this.name = name;
        this.score = score;
    }
    setScore(score){
        this.score = score;
    }
    getName(){
        return this.name;
    }
    getScore(){
        return this.score;
    }
}

class Student{
    constructor(name){
        this.name = name;
        this.subjects = [];
    }
    addSubject(subject){
        this.subjects.push(subject);
    }

    getRate(){
        let total = this.getTotalScoreSubject();
        let avg = this.averageScore(total);
        if(avg > 8){
            return 'Giỏi';
        }else if(avg<5){
            return 'Yếu';
        }else{
            return 'Khá';
        }
    }

    averageScore(total) {
        return total / this.subjects.length;
    }

    getTotalScoreSubject() {
        let total = 0;
        for (let i = 0; i < this.subjects.length; i++) {
            total += this.subjects[i].getScore();
        }
        return total;
    }
}

let math = new Subject('math', 5);
math.setScore(1);
let physics = new Subject('physics', 6);
physics.setScore(2);
let chemistry = new Subject('chemistry', 7);

let tho = new Student('Thọ');
tho.addSubject(math);
tho.addSubject(physics);
tho.addSubject(chemistry);
console.log(tho.getRate());