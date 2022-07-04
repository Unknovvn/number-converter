import Scale from "./scale";

const scales_biggest_to_smallest = [
  new Scale(1_000_000_000_000_000, "quadrillion"),
  new Scale(1_000_000_000_000, "trillion"),
  new Scale(1_000_000_000, "billion"),
  new Scale(1_000_000, "million"),
  new Scale(1000, "thousand"),
  new Scale(100, "hundred"),
];

var zero_to_nineteen_names = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

var tens_names = [
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const formatResult = (isNegative: boolean, number: string): string => {
  if (isNegative) {
    return "minus " + number;
  }

  return number;
};

const formatZeroToHundred = (number: number): string => {
  if (number < zero_to_nineteen_names.length) {
    return zero_to_nineteen_names[number];
  }

  const tens = Math.floor(number / 10);
  const remainingDigits = number % 10;
  if (remainingDigits > 0) {
    return tens_names[tens - 1] + "-" + zero_to_nineteen_names[remainingDigits];
  }

  return tens_names[tens - 1];
};

const formatZeroToThousand = (number: number): string => {
  if (number < zero_to_nineteen_names.length) {
    return zero_to_nineteen_names[number];
  }

  const hundredScale =
    scales_biggest_to_smallest[scales_biggest_to_smallest.length - 1];
  const remainder = number % 100;

  if (number > hundredScale.getValue()) {
    const amountOfHundreds = Math.floor(number / hundredScale.getValue());

    if (remainder > 0) {
      return (
        hundredScale.format(formatZeroToThousand(amountOfHundreds)) +
        " " +
        formatZeroToHundred(remainder)
      );
    }

    return hundredScale.format(formatZeroToThousand(amountOfHundreds));
  }

  if (remainder > 0) {
    return formatZeroToHundred(remainder);
  }

  return "";
};

export const convertNumber = (number: number): string => {
  let isNegativeNumber: boolean;
  let remainder: number;

  if (number < 0) {
    isNegativeNumber = true;
    remainder = number * -1;
  } else {
    isNegativeNumber = false;
    remainder = number;
  }

  if (remainder < zero_to_nineteen_names.length) {
    return formatResult(isNegativeNumber, zero_to_nineteen_names[remainder]);
  }

  const resultArray: string[] = [];
  for (const scale of scales_biggest_to_smallest) {
    if (remainder >= scale.getValue()) {
      const amount = Math.floor(remainder / scale.getValue());
      resultArray.push(scale.format(formatZeroToThousand(amount)));
      remainder -= scale.getValue() * amount;
    }
  }

  if (remainder > 0) {
    resultArray.push(formatZeroToHundred(remainder));
  }

  return formatResult(isNegativeNumber, resultArray.join(" "));
};
