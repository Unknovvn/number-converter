import { convertNumber } from "./converter";

test("ConvertNumberToEnglish_CorrectlyConvertsPlusMinusNineteen", () => {
  expect(convertNumber(-19)).toEqual("minus nineteen");
  expect(convertNumber(-18)).toEqual("minus eighteen");
  expect(convertNumber(-17)).toEqual("minus seventeen");
  expect(convertNumber(-16)).toEqual("minus sixteen");
  expect(convertNumber(-15)).toEqual("minus fifteen");
  expect(convertNumber(-14)).toEqual("minus fourteen");
  expect(convertNumber(-13)).toEqual("minus thirteen");
  expect(convertNumber(-12)).toEqual("minus twelve");
  expect(convertNumber(-11)).toEqual("minus eleven");
  expect(convertNumber(-10)).toEqual("minus ten");
  expect(convertNumber(-9)).toEqual("minus nine");
  expect(convertNumber(-8)).toEqual("minus eight");
  expect(convertNumber(-7)).toEqual("minus seven");
  expect(convertNumber(-6)).toEqual("minus six");
  expect(convertNumber(-5)).toEqual("minus five");
  expect(convertNumber(-4)).toEqual("minus four");
  expect(convertNumber(-3)).toEqual("minus three");
  expect(convertNumber(-2)).toEqual("minus two");
  expect(convertNumber(-1)).toEqual("minus one");
  expect(convertNumber(0)).toEqual("zero");
  expect(convertNumber(1)).toEqual("one");
  expect(convertNumber(2)).toEqual("two");
  expect(convertNumber(3)).toEqual("three");
  expect(convertNumber(4)).toEqual("four");
  expect(convertNumber(5)).toEqual("five");
  expect(convertNumber(6)).toEqual("six");
  expect(convertNumber(7)).toEqual("seven");
  expect(convertNumber(8)).toEqual("eight");
  expect(convertNumber(9)).toEqual("nine");
  expect(convertNumber(10)).toEqual("ten");
  expect(convertNumber(11)).toEqual("eleven");
  expect(convertNumber(12)).toEqual("twelve");
  expect(convertNumber(13)).toEqual("thirteen");
  expect(convertNumber(14)).toEqual("fourteen");
  expect(convertNumber(15)).toEqual("fifteen");
  expect(convertNumber(16)).toEqual("sixteen");
  expect(convertNumber(17)).toEqual("seventeen");
  expect(convertNumber(18)).toEqual("eighteen");
  expect(convertNumber(19)).toEqual("nineteen");
});

test("ConvertNumberToEnglish_CorrectlyConvertsTens", () => {
  expect(convertNumber(10)).toEqual("ten");
  expect(convertNumber(20)).toEqual("twenty");
  expect(convertNumber(30)).toEqual("thirty");
  expect(convertNumber(40)).toEqual("forty");
  expect(convertNumber(50)).toEqual("fifty");
  expect(convertNumber(60)).toEqual("sixty");
  expect(convertNumber(70)).toEqual("seventy");
  expect(convertNumber(80)).toEqual("eighty");
  expect(convertNumber(90)).toEqual("ninety");
});

test("ConvertNumberToEnglish_CorrectlyConvertsDozensWithUnits", () => {
  expect(convertNumber(40)).toEqual("forty");
  expect(convertNumber(41)).toEqual("forty-one");
  expect(convertNumber(42)).toEqual("forty-two");
  expect(convertNumber(43)).toEqual("forty-three");
  expect(convertNumber(44)).toEqual("forty-four");
  expect(convertNumber(45)).toEqual("forty-five");
  expect(convertNumber(46)).toEqual("forty-six");
  expect(convertNumber(47)).toEqual("forty-seven");
  expect(convertNumber(48)).toEqual("forty-eight");
  expect(convertNumber(49)).toEqual("forty-nine");
});

test("ConvertNumberToEnglish_CorrectlyConvertsHundreds", () => {
  expect(convertNumber(100)).toEqual("one hundred");
  expect(convertNumber(200)).toEqual("two hundred");
  expect(convertNumber(300)).toEqual("three hundred");
  expect(convertNumber(400)).toEqual("four hundred");
  expect(convertNumber(500)).toEqual("five hundred");
  expect(convertNumber(600)).toEqual("six hundred");
  expect(convertNumber(700)).toEqual("seven hundred");
  expect(convertNumber(800)).toEqual("eight hundred");
  expect(convertNumber(900)).toEqual("nine hundred");
  expect(convertNumber(999)).toEqual("nine hundred ninety-nine");
});

test("ConvertNumberToEnglish_CorrectlyConvertsThousands", () => {
  expect(convertNumber(1_000)).toEqual("one thousand");
  expect(convertNumber(2_000)).toEqual("two thousand");
  expect(convertNumber(3_000)).toEqual("three thousand");
  expect(convertNumber(4_000)).toEqual("four thousand");
  expect(convertNumber(5_000)).toEqual("five thousand");
  expect(convertNumber(6_000)).toEqual("six thousand");
  expect(convertNumber(7_000)).toEqual("seven thousand");
  expect(convertNumber(8_000)).toEqual("eight thousand");
  expect(convertNumber(9_000)).toEqual("nine thousand");
  expect(convertNumber(9_999)).toEqual(
    "nine thousand nine hundred ninety-nine"
  );
});

test("ConvertNumberToEnglish_CorrectlyConvertsMillions", () => {
  expect(convertNumber(1_000_000)).toEqual("one million");
  expect(convertNumber(2_000_000)).toEqual("two million");
  expect(convertNumber(3_000_000)).toEqual("three million");
  expect(convertNumber(4_000_000)).toEqual("four million");
  expect(convertNumber(5_000_000)).toEqual("five million");
  expect(convertNumber(6_000_000)).toEqual("six million");
  expect(convertNumber(7_000_000)).toEqual("seven million");
  expect(convertNumber(8_000_000)).toEqual("eight million");
  expect(convertNumber(9_000_000)).toEqual("nine million");
  expect(convertNumber(9_999_999)).toEqual(
    "nine million nine hundred ninety-nine thousand nine hundred ninety-nine"
  );
});

test("ConvertNumberToEnglish_CorrectlyConvertsBillions", () => {
  expect(convertNumber(1_000_000_000)).toEqual("one billion");
  expect(convertNumber(2_000_000_000)).toEqual("two billion");
  expect(convertNumber(3_000_000_000)).toEqual("three billion");
  expect(convertNumber(4_000_000_000)).toEqual("four billion");
  expect(convertNumber(5_000_000_000)).toEqual("five billion");
  expect(convertNumber(6_000_000_000)).toEqual("six billion");
  expect(convertNumber(7_000_000_000)).toEqual("seven billion");
  expect(convertNumber(8_000_000_000)).toEqual("eight billion");
  expect(convertNumber(9_000_000_000)).toEqual("nine billion");
  expect(convertNumber(9_999_999_999)).toEqual(
    "nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine"
  );
});

test("ConvertNumberToEnglish_CorrectlyConvertsTrillions", () => {
  expect(convertNumber(1_000_000_000_000)).toEqual("one trillion");
  expect(convertNumber(2_000_000_000_000)).toEqual("two trillion");
  expect(convertNumber(3_000_000_000_000)).toEqual("three trillion");
  expect(convertNumber(4_000_000_000_000)).toEqual("four trillion");
  expect(convertNumber(5_000_000_000_000)).toEqual("five trillion");
  expect(convertNumber(6_000_000_000_000)).toEqual("six trillion");
  expect(convertNumber(7_000_000_000_000)).toEqual("seven trillion");
  expect(convertNumber(8_000_000_000_000)).toEqual("eight trillion");
  expect(convertNumber(9_000_000_000_000)).toEqual("nine trillion");
  expect(convertNumber(9_999_999_999_999)).toEqual(
    "nine trillion nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine"
  );
});

test("ConvertNumberToEnglish_CorrectlyConvertsQuadrillions", () => {
  expect(convertNumber(1_000_000_000_000_000)).toEqual("one quadrillion");
  expect(convertNumber(2_000_000_000_000_000)).toEqual("two quadrillion");
  expect(convertNumber(3_000_000_000_000_000)).toEqual("three quadrillion");
  expect(convertNumber(4_000_000_000_000_000)).toEqual("four quadrillion");
  expect(convertNumber(5_000_000_000_000_000)).toEqual("five quadrillion");
  expect(convertNumber(6_000_000_000_000_000)).toEqual("six quadrillion");
  expect(convertNumber(7_000_000_000_000_000)).toEqual("seven quadrillion");
  expect(convertNumber(8_000_000_000_000_000)).toEqual("eight quadrillion");
  expect(convertNumber(9_000_000_000_000_000)).toEqual("nine quadrillion");
  expect(convertNumber(9_006_999_999_999_999)).toEqual(
    "nine quadrillion six trillion nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine"
  );
});
