import Scale from "./scale";

var scales_biggest_to_smallest = [
  new Scale(1_000_000_000_000_000, "biliard", "biliardy", "biliardów"),
  new Scale(1_000_000_000_000, "bilion", "biliony", "bilionów"),
  new Scale(1_000_000_000, "miliard", "miliardy", "miliardów"),
  new Scale(1_000_000, "milion", "miliony", "milionów"),
  new Scale(1000, "tysiąc", "tysiące", "tysięcy"),
];

var zero_to_nineteen_names = [
  "zero",
  "jeden",
  "dwa",
  "trzy",
  "cztery",
  "pięć",
  "sześć",
  "siedem",
  "osiem",
  "dziewięć",
  "dziesięć",
  "jedenaście",
  "dwanaście",
  "trzynaście",
  "czternaście",
  "piętnaście",
  "szesnaście",
  "siedemnaście",
  "osiemnaście",
  "dziewiętnaście",
];

var tens_names = [
  "dziesięć",
  "dwadzieścia",
  "trzydzieści",
  "czterdzieści",
  "pięćdziesiąt",
  "sześćdziesiąt",
  "siedemdziesiąt",
  "osiemdziesiąt",
  "dziewięćdziesiąt",
];

var hundreds_names = [
  "sto",
  "dwieście",
  "trzysta",
  "czterysta",
  "pięćset",
  "sześćset",
  "siedemset",
  "osiemset",
  "dziewięćset",
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
    return tens_names[tens - 1] + " " + zero_to_nineteen_names[remainingDigits];
  }

  return tens_names[tens - 1];
};

const formatZeroToThousand = (number: number): string => {
  if (number < zero_to_nineteen_names.length) {
    return zero_to_nineteen_names[number];
  }

  const amountOfHundreds = Math.floor(number / 100);
  const remainder = number % 100;

  if (amountOfHundreds > 0) {
    if (remainder > 0) {
      return (
        hundreds_names[amountOfHundreds - 1] +
        " " +
        formatZeroToHundred(remainder)
      );
    }

    return hundreds_names[amountOfHundreds - 1];
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
      resultArray.push(scale.format(amount, formatZeroToThousand(amount)));
      remainder -= scale.getValue() * amount;
    }
  }

  if (remainder > 0) {
    resultArray.push(formatZeroToThousand(remainder));
  }

  return formatResult(isNegativeNumber, resultArray.join(" "));
};
