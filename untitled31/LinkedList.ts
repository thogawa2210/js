import {Node} from "./Salary";

export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(name: string, score: number) {
        let studentScore = new Node(name, score);
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
            let studentScore = new Node(name, score);
            this.tail.next = studentScore;
            this.tail = studentScore;
            this.size++;
        }
    }

    showList(): T[] {
        let listSalary= [];
        let currentSalary = this.head;

        while (currentSalary !== null) {
            listSalary.push(currentSalary.month,currentSalary.salary);
            currentSalary = currentSalary.next
        }
        return listSalary;
    }

    totalSalary(){
        let sum = 0;
        let currentSalary = this.head;

        while (currentSalary !== null) {
            sum += currentSalary.salary;
            currentSalary = currentSalary.next
        }
        return sum;
    }

    findMonthHaveBestSalary(){
        let currentSalary = this.head;
        let maxSalary = currentSalary.salary;
        let listMonth = [];
        while(currentSalary !== null){
            if(currentSalary.salary > maxSalary) {
                maxSalary = currentSalary.salary;
            }
            currentSalary = currentSalary.next;
        }
        currentSalary = this.head;
        while( currentSalary !== null){
            if(currentSalary.salary === maxSalary) {
                listMonth.push(currentSalary.month);
            }
            currentSalary = currentSalary.next;
        }
        return listMonth;
    }
}