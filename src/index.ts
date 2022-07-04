import { convertNumber as convertNumberToEnglish } from "./english/converter";

export function toEnglish(number: number): string {
  return convertNumberToEnglish(number);
}
