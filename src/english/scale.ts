export default class Scale {
  constructor(private _value: number, private _name: string) {}

  getValue(): number {
    return this._value;
  }

  format(formattedAmount: string): string {
    return formattedAmount + " " + this._name;
  }
}
