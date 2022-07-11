export class Node<T> {
    month: string;
    salary: number;
    next: Node<T> | null = null;

    constructor(name: string, score: number) {
        this.month = name;
        this.salary = score;
    }

    readSalary(): number {
        return this.salary;
    }
}