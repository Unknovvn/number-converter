import { convertNumber as convertNumberToEnglish } from "./english/converter";
import { convertNumber as convertNumberToPolish } from "./polish/converter";

export function toEnglish(number: number): string {
  return convertNumberToEnglish(number);
}

export function toPolish(number: number): string {
  return convertNumberToPolish(number);
}
