export class PhoneNumberRegexRegex {

    private EMAIL_REGEX: RegExp = /^\(\d\d\)\-\(0\d{9,9}\)$/;

    public validate(regex: string): boolean {
        return this.EMAIL_REGEX.test(regex);
    }
}