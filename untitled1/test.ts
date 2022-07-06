interface StringFormat {
    (str: string, isUpper: boolean): string
}
let format: StringFormat;

format = function (src: string, upper: boolean) {
    return upper ? src.toLocaleUpperCase() : src.toLocaleLowerCase();
};

console.log(format('hi', true));