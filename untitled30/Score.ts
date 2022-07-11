export class Score<T> {
    name: string;
    score: number;
    next: Score<T> | null = null;

    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }

    readScore(): number {
        return this.score;
    }
}