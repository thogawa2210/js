import {Score} from "./Score";

export class LinkedList<T> {
    head: Score<T> | null;
    tail: Score<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(name: string, score: number) {
        let studentScore = new Score(name, score);
        studentScore.next = this.head;
        this.head = studentScore;

        if (!this.tail) {
            this.tail = studentScore;
        }
        this.size++;
    }

    insertLast(name: string, score: number) {
        if (!this.head) {
            this.insertFirst(name, score);
        } else {
            let studentScore = new Score(name, score);
            this.tail.next = studentScore;
            this.tail = studentScore;
            this.size++;
        }
    }

    showList(): T[] {
        let listScore= [];
        let currentScore = this.head;

        while (currentScore !== null) {
            listScore.push(currentScore.readScore());
            currentScore = currentScore.next
        }
        return listScore;
    }

    totalStudentsFail(){
        let sum = 0;
        let currentScore = this.head;

        while (currentScore !== null) {
            if (currentScore.score <= 5) {
                sum +=1;
            }
            currentScore = currentScore.next
        }
        return sum;
    }

    findByName(name: string){
        let listStudent = [];
        let currentScore = this.head;
        while (currentScore !== null) {
            if (currentScore.name === name) {
                listStudent.push(currentScore);
            }
            currentScore = currentScore.next
        }
        return listStudent;
    }

    listStudentMaxScore(){
        let currentScore = this.head;
        let maxScore = currentScore.score;
        let listStudentMaxScore = [];
        while(currentScore !== null){
            if(currentScore.score > maxScore) {
                maxScore = currentScore.score;
            }
            currentScore = currentScore.next;
        }
        currentScore = this.head;
        while( currentScore !== null){
            if(currentScore.score === maxScore) {
                listStudentMaxScore.push(currentScore.name);
            }
            currentScore = currentScore.next;
        }
        return listStudentMaxScore;
    }
}