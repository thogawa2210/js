// import {AbsoluteNumberCalculator} from "../app";
//
// describe("testFindAbsolute0", () => {
//     test("testFindAbsolute0", () => {
//         let number = 0;
//         let expected = 0;
//
//         expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
//     });
// });
//
// describe("testFindAbsolute1", () => {
//     test("testFindAbsolute1", () => {
//         let number = 1;
//         let expected = 1;
//
//         expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
//     });
// });
//
// describe("testFindAbsoluteNegative1", () => {
//     test("testFindAbsoluteNegative1", () => {
//         let number = -1;
//         let expected = 1;
//
//         expect(AbsoluteNumberCalculator.findAbsolute(number)).toEqual(expected);
//     });
// });

// import {BasicCalculator} from "../app";
//
// describe('BasicCalulator Testing', () => {
//     let calc: BasicCalculator = new BasicCalculator();
//
//
//     test('should return an instance of a basic calculator', () => {
//         expect(calc).toEqual({});
//     });
//
//
//     test('should return the addition of a + b', () => {
//         expect(calc.add(1,3)).toEqual(4);
//     });
//
//
//     test('should return the subtraction of a - b', () => {
//         expect(calc.subtract(1,3)).toEqual(-2);
//     });
//
//
//     test('should return the multple of a * b', () => {
//         expect(calc.multiple(1,3)).toEqual(3);
//     });
//
//
//     test('should return the divide of a / b', () => {
//         expect(calc.divide(1,3)).toEqual(1/3);
//     });
// });

// import {TriangleClassifier} from "../app";
//
// describe('BasicCalulator Testing', () => {
//     let triangleClassifier = new TriangleClassifier();
//
//     test('kết quả là tam giác đều', () => {
//         expect(triangleClassifier.classifier(2, 2, 2)).toBe('tam giác đều');
//     });
//     test('kết quả là tam giác cân', () => {
//         expect(triangleClassifier.classifier(2, 2, 3)).toBe('tam giác cân');
//     });
//     test('kết quả là tam giác thường', () => {
//         expect(triangleClassifier.classifier(3, 4, 5)).toBe('tam giác thường');
//     });
//     test('kết quả là không phải tam giác', () => {
//         expect(triangleClassifier.classifier(8, 2, 3)).toBe('không phải tam giác');
//     });
//     test('kết quả là không phải tam giác', () => {
//         expect(triangleClassifier.classifier(0, 1, 1)).toBe('không phải tam giác');
//     });
//     test('kết quả là không phải tam giác', () => {
//         expect(triangleClassifier.classifier(-1, 2, 1)).toBe('không phải tam giác');
//     });
// })

import {FizzBuzzTranslate} from "../app";

describe('FizzBuzz Testing', () => {
    let fizzbuzz = new FizzBuzzTranslate();

    test('the result should be fizz',() => {
        expect(fizzbuzz.translate(9)).toBe('Fizz')});
    test('the result should be buzz',() => {
        expect(fizzbuzz.translate(10)).toBe('Buzz')});
    test('the result should be fizzbuzz',() => {
        expect(fizzbuzz.translate(30)).toBe('FizzBuzz')});
    test('the result should be number',() => {
        expect(fizzbuzz.translate(7)).toBe('7')});
})
