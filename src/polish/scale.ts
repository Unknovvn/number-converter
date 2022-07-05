export default class Scale {
  constructor(
    private _value: number,
    private _singularName: string,
    private _pluralSingleDigitName: string,
    private _pluralTwoDigitName: string
  ) {}

  getValue(): number {
    return this._value;
  }

  format(amount: number, formattedAmount: string): string {
    const remainingDecimalDigits = amount % 100;
    const remainingDigits = amount % 10;

    if (remainingDecimalDigits >= 5) {
      return formattedAmount + " " + this._pluralTwoDigitName;
    }

    if (remainingDigits === 0) {
      return formattedAmount + " " + this._pluralTwoDigitName;
    }

    if (remainingDigits === 1) {
      return formattedAmount + " " + this._singularName;
    }

    return formattedAmount + " " + this._pluralSingleDigitName;
  }
}
