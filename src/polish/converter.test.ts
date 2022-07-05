import { convertNumber } from "./converter";

test("ConvertNumberToPolish_CorrectlyConvertsPlusMinusNineteen", () => {
  expect(convertNumber(-19)).toEqual("minus dziewiętnaście");
  expect(convertNumber(-18)).toEqual("minus osiemnaście");
  expect(convertNumber(-17)).toEqual("minus siedemnaście");
  expect(convertNumber(-16)).toEqual("minus szesnaście");
  expect(convertNumber(-15)).toEqual("minus piętnaście");
  expect(convertNumber(-14)).toEqual("minus czternaście");
  expect(convertNumber(-13)).toEqual("minus trzynaście");
  expect(convertNumber(-12)).toEqual("minus dwanaście");
  expect(convertNumber(-11)).toEqual("minus jedenaście");
  expect(convertNumber(-10)).toEqual("minus dziesięć");
  expect(convertNumber(-9)).toEqual("minus dziewięć");
  expect(convertNumber(-8)).toEqual("minus osiem");
  expect(convertNumber(-7)).toEqual("minus siedem");
  expect(convertNumber(-6)).toEqual("minus sześć");
  expect(convertNumber(-5)).toEqual("minus pięć");
  expect(convertNumber(-4)).toEqual("minus cztery");
  expect(convertNumber(-3)).toEqual("minus trzy");
  expect(convertNumber(-2)).toEqual("minus dwa");
  expect(convertNumber(-1)).toEqual("minus jeden");
  expect(convertNumber(0)).toEqual("zero");
  expect(convertNumber(1)).toEqual("jeden");
  expect(convertNumber(2)).toEqual("dwa");
  expect(convertNumber(3)).toEqual("trzy");
  expect(convertNumber(4)).toEqual("cztery");
  expect(convertNumber(5)).toEqual("pięć");
  expect(convertNumber(6)).toEqual("sześć");
  expect(convertNumber(7)).toEqual("siedem");
  expect(convertNumber(8)).toEqual("osiem");
  expect(convertNumber(9)).toEqual("dziewięć");
  expect(convertNumber(10)).toEqual("dziesięć");
  expect(convertNumber(11)).toEqual("jedenaście");
  expect(convertNumber(12)).toEqual("dwanaście");
  expect(convertNumber(13)).toEqual("trzynaście");
  expect(convertNumber(14)).toEqual("czternaście");
  expect(convertNumber(15)).toEqual("piętnaście");
  expect(convertNumber(16)).toEqual("szesnaście");
  expect(convertNumber(17)).toEqual("siedemnaście");
  expect(convertNumber(18)).toEqual("osiemnaście");
  expect(convertNumber(19)).toEqual("dziewiętnaście");
});

test("ConvertNumberToPolish_CorrectlyConvertsTens", () => {
  expect(convertNumber(10)).toEqual("dziesięć");
  expect(convertNumber(20)).toEqual("dwadzieścia");
  expect(convertNumber(30)).toEqual("trzydzieści");
  expect(convertNumber(40)).toEqual("czterdzieści");
  expect(convertNumber(50)).toEqual("pięćdziesiąt");
  expect(convertNumber(60)).toEqual("sześćdziesiąt");
  expect(convertNumber(70)).toEqual("siedemdziesiąt");
  expect(convertNumber(80)).toEqual("osiemdziesiąt");
  expect(convertNumber(90)).toEqual("dziewięćdziesiąt");
});

test("ConvertNumberToPolish_CorrectlyConvertsDozensWithUnits", () => {
  expect(convertNumber(40)).toEqual("czterdzieści");
  expect(convertNumber(41)).toEqual("czterdzieści jeden");
  expect(convertNumber(42)).toEqual("czterdzieści dwa");
  expect(convertNumber(43)).toEqual("czterdzieści trzy");
  expect(convertNumber(44)).toEqual("czterdzieści cztery");
  expect(convertNumber(45)).toEqual("czterdzieści pięć");
  expect(convertNumber(46)).toEqual("czterdzieści sześć");
  expect(convertNumber(47)).toEqual("czterdzieści siedem");
  expect(convertNumber(48)).toEqual("czterdzieści osiem");
  expect(convertNumber(49)).toEqual("czterdzieści dziewięć");
});

test("ConvertNumberToPolish_CorrectlyConvertsHundreds", () => {
  expect(convertNumber(100)).toEqual("sto");
  expect(convertNumber(200)).toEqual("dwieście");
  expect(convertNumber(300)).toEqual("trzysta");
  expect(convertNumber(400)).toEqual("czterysta");
  expect(convertNumber(500)).toEqual("pięćset");
  expect(convertNumber(600)).toEqual("sześćset");
  expect(convertNumber(700)).toEqual("siedemset");
  expect(convertNumber(800)).toEqual("osiemset");
  expect(convertNumber(900)).toEqual("dziewięćset");
  expect(convertNumber(999)).toEqual("dziewięćset dziewięćdziesiąt dziewięć");
});

test("ConvertNumberToPolish_CorrectlyConvertsThousands", () => {
  expect(convertNumber(1_000)).toEqual("jeden tysiąc");
  expect(convertNumber(2_000)).toEqual("dwa tysiące");
  expect(convertNumber(3_000)).toEqual("trzy tysiące");
  expect(convertNumber(4_000)).toEqual("cztery tysiące");
  expect(convertNumber(5_000)).toEqual("pięć tysięcy");
  expect(convertNumber(6_000)).toEqual("sześć tysięcy");
  expect(convertNumber(7_000)).toEqual("siedem tysięcy");
  expect(convertNumber(8_000)).toEqual("osiem tysięcy");
  expect(convertNumber(9_000)).toEqual("dziewięć tysięcy");
  expect(convertNumber(9_999)).toEqual(
    "dziewięć tysięcy dziewięćset dziewięćdziesiąt dziewięć"
  );
});

test("ConvertNumberToPolish_CorrectlyConvertsMillions", () => {
  expect(convertNumber(1_000_000)).toEqual("jeden milion");
  expect(convertNumber(2_000_000)).toEqual("dwa miliony");
  expect(convertNumber(3_000_000)).toEqual("trzy miliony");
  expect(convertNumber(4_000_000)).toEqual("cztery miliony");
  expect(convertNumber(5_000_000)).toEqual("pięć milionów");
  expect(convertNumber(6_000_000)).toEqual("sześć milionów");
  expect(convertNumber(7_000_000)).toEqual("siedem milionów");
  expect(convertNumber(8_000_000)).toEqual("osiem milionów");
  expect(convertNumber(9_000_000)).toEqual("dziewięć milionów");
  expect(convertNumber(9_999_999)).toEqual(
    "dziewięć milionów dziewięćset dziewięćdziesiąt dziewięć tysięcy dziewięćset dziewięćdziesiąt dziewięć"
  );
});

test("ConvertNumberToPolish_CorrectlyConvertsBillions", () => {
  expect(convertNumber(1_000_000_000)).toEqual("jeden miliard");
  expect(convertNumber(2_000_000_000)).toEqual("dwa miliardy");
  expect(convertNumber(3_000_000_000)).toEqual("trzy miliardy");
  expect(convertNumber(4_000_000_000)).toEqual("cztery miliardy");
  expect(convertNumber(5_000_000_000)).toEqual("pięć miliardów");
  expect(convertNumber(6_000_000_000)).toEqual("sześć miliardów");
  expect(convertNumber(7_000_000_000)).toEqual("siedem miliardów");
  expect(convertNumber(8_000_000_000)).toEqual("osiem miliardów");
  expect(convertNumber(9_000_000_000)).toEqual("dziewięć miliardów");
  expect(convertNumber(9_999_999_999)).toEqual(
    "dziewięć miliardów dziewięćset dziewięćdziesiąt dziewięć milionów dziewięćset dziewięćdziesiąt dziewięć tysięcy dziewięćset dziewięćdziesiąt dziewięć"
  );
});

test("ConvertNumberToPolish_CorrectlyConvertsTrillions", () => {
  expect(convertNumber(1_000_000_000_000)).toEqual("jeden bilion");
  expect(convertNumber(2_000_000_000_000)).toEqual("dwa biliony");
  expect(convertNumber(3_000_000_000_000)).toEqual("trzy biliony");
  expect(convertNumber(4_000_000_000_000)).toEqual("cztery biliony");
  expect(convertNumber(5_000_000_000_000)).toEqual("pięć bilionów");
  expect(convertNumber(6_000_000_000_000)).toEqual("sześć bilionów");
  expect(convertNumber(7_000_000_000_000)).toEqual("siedem bilionów");
  expect(convertNumber(8_000_000_000_000)).toEqual("osiem bilionów");
  expect(convertNumber(9_000_000_000_000)).toEqual("dziewięć bilionów");
  expect(convertNumber(9_999_999_999_999)).toEqual(
    "dziewięć bilionów dziewięćset dziewięćdziesiąt dziewięć miliardów dziewięćset dziewięćdziesiąt dziewięć milionów dziewięćset dziewięćdziesiąt dziewięć tysięcy dziewięćset dziewięćdziesiąt dziewięć"
  );
});

test("ConvertNumberToPolish_CorrectlyConvertsQuadrillions", () => {
  expect(convertNumber(1_000_000_000_000_000)).toEqual("jeden biliard");
  expect(convertNumber(2_000_000_000_000_000)).toEqual("dwa biliardy");
  expect(convertNumber(3_000_000_000_000_000)).toEqual("trzy biliardy");
  expect(convertNumber(4_000_000_000_000_000)).toEqual("cztery biliardy");
  expect(convertNumber(5_000_000_000_000_000)).toEqual("pięć biliardów");
  expect(convertNumber(6_000_000_000_000_000)).toEqual("sześć biliardów");
  expect(convertNumber(7_000_000_000_000_000)).toEqual("siedem biliardów");
  expect(convertNumber(8_000_000_000_000_000)).toEqual("osiem biliardów");
  expect(convertNumber(9_000_000_000_000_000)).toEqual("dziewięć biliardów");
  expect(convertNumber(9_006_999_999_999_999)).toEqual(
    "dziewięć biliardów sześć bilionów dziewięćset dziewięćdziesiąt dziewięć miliardów dziewięćset dziewięćdziesiąt dziewięć milionów dziewięćset dziewięćdziesiąt dziewięć tysięcy dziewięćset dziewięćdziesiąt dziewięć"
  );
});
