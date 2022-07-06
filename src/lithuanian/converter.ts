import Scale from "./scale";

var scales_biggest_to_smallest = [
  new Scale(
    1_000_000_000_000_000,
    "kvadrilijonas",
    "kvadrilijonai",
    "kvadrilijonų"
  ),
  new Scale(1_000_000_000_000, "trilijonas", "trilijonai", "trilijonų"),
  new Scale(1_000_000_000, "milijardas", "milijardai", "milijardų"),
  new Scale(1_000_000, "milijonas", "milijonai", "milijonų"),
  new Scale(1000, "tūkstantis", "tūkstančiai", "tūkstančių"),
  new Scale(100, "šimtas", "šimtai", "šimtų"),
];

var zero_to_devyniteen_names = [
  "nulis",
  "vienas",
  "du",
  "trys",
  "keturi",
  "penki",
  "šeši",
  "septyni",
  "aštuoni",
  "devyni",
  "dešimt",
  "vienuolika",
  "dvylika",
  "trylika",
  "keturiolika",
  "penkiolika",
  "šešiolika",
  "septyniolika",
  "aštuoniolika",
  "devyniolika",
];

var tens_names = [
  "dešimt",
  "dvidešimt",
  "trisdešimt",
  "keturiasdešimt",
  "penkiasdešimt",
  "šešiasdešimt",
  "septyniasdešimt",
  "aštuoniasdešimt",
  "devyniasdešimt",
];

const formatResult = (isNegative: boolean, number: string): string => {
  if (isNegative) {
    return "minus " + number;
  }

  return number;
};

const formatZeroToHundred = (number: number): string => {
  if (number < zero_to_devyniteen_names.length) {
    return zero_to_devyniteen_names[number];
  }

  const tens = Math.floor(number / 10);
  const remainingDigits = number % 10;
  if (remainingDigits > 0) {
    return (
      tens_names[tens - 1] + " " + zero_to_devyniteen_names[remainingDigits]
    );
  }

  return tens_names[tens - 1];
};

const formatZeroToThousand = (number: number): string => {
  if (number < zero_to_devyniteen_names.length) {
    return zero_to_devyniteen_names[number];
  }

  const hundredScale =
    scales_biggest_to_smallest[scales_biggest_to_smallest.length - 1];
  const remainder = number % 100;

  if (number > hundredScale.getValue()) {
    const amountOfHundreds = Math.floor(number / hundredScale.getValue());

    if (remainder > 0) {
      return (
        hundredScale.format(
          amountOfHundreds,
          formatZeroToThousand(amountOfHundreds)
        ) +
        " " +
        formatZeroToHundred(remainder)
      );
    }

    return hundredScale.format(
      amountOfHundreds,
      formatZeroToThousand(amountOfHundreds)
    );
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

  if (remainder < zero_to_devyniteen_names.length) {
    return formatResult(isNegativeNumber, zero_to_devyniteen_names[remainder]);
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
