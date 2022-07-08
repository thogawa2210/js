import {Rectangle} from "./Rectangle";
import {Colorable} from "./Colorable";

export class Square extends Rectangle implements Colorable {
    howtocolor: boolean = true;
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }

    show(): string {
        return super.show() + ' có cạnh là: ' + this.width;
    }

    howToColor():string{
        return 'Color all four side';
    }
}

let square = new Square('a', 10);
console.log(square.howToColor());
