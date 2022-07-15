export class ClassRegex {
    private CLASS_REGEX: RegExp = /^[ACP]\d{4,4}[GHIKLM]$/;

    public validate(regex: string): boolean {
        return this.CLASS_REGEX.test(regex);
    }
}