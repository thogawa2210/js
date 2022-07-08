// import {Animal} from "../AbstractClass/Animal";
//
// export class Chicken extends Animal {
//     makeSound(): string {
//         return "Chicken: cluck-cluck!";
//     }
// }

import {Animal} from "../AbstractClass/Animal";
import {Edible} from "../InterfaceClass/Edible";

export class Chicken extends Animal implements Edible{
    makeSound(): string {
        return "Chicken: cluck-cluck!";
    }

    howToEat(): string {
        return "Could be fried";
    }
}