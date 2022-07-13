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

// export class BasicCalculator{
//     add(a: number, b: number): number {
//         return a + b;
//     }
//     subtract(a: number, b: number): number {
//         return a - b;
//     }
//     multiple(a: number, b: number): number {
//         return a * b;
//     }
//     divide(a: number, b: number): number {
//         return a/b;
//     }
// }

// export class TriangleClassifier{
//     classifier(a:number, b:number,c:number){
//         if( a>0 && b>0 && c>0){
//             if( a+b>c && b+c>a && c+a>b){
//                 if(a === b && a === c){
//                     return 'tam giác đều';
//                 }else if(a === b || a === c || b === c){
//                     return 'tam giác cân';
//                 }else{
//                     return 'tam giác thường';
//                 }
//             }else{
//                 return 'không phải tam giác';
//             }
//         }else{
//             return 'không phải tam giác';
//         }
//     }
// }

export class FizzBuzzTranslate {
    translate(number: number) {
        if (number % 3 === 0 && number % 5 === 0) {
            return 'FizzBuzz';
        } else {
            if (number % 3 === 0) {
                return 'Fizz';
            } else if (number % 5 === 0) {
                return 'Buzz';
            }else{
                return `${number}`;
            }
        }
    }
}