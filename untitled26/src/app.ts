// export class AbsoluteNumberCalculator {
//     public static findAbsolute(num: number): number {
//         //throw new Error("Unsupported Operation Exception");
//         //return 0;
//
//         if(num < 0)
//             return  -num;
//         return num;
//     }
// }

export class BasicCalculator{
    add(a: number, b: number): number {
        return a + b;
    }
    subtract(a: number, b: number): number {
        return a - b;
    }
    multiple(a: number, b: number): number {
        return a * b;
    }
    divide(a: number, b: number): number {
        return a/b;
    }
}