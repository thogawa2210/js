export class AbsoluteNumberCalculator {
    public static findAbsolute(num: number): number {
        //throw new Error("Unsupported Operation Exception");
        //return 0;

        if(num < 0)
            return  -num;
        return num;
    }
}