import { convertNumber } from "./converter";

test("ConvertNumberToLithuanian_CorrectlyConvertsPlusMinusdevyniteen", () => {
  expect(convertNumber(-19)).toEqual("minus devyniolika");
  expect(convertNumber(-18)).toEqual("minus aštuoniolika");
  expect(convertNumber(-17)).toEqual("minus septyniolika");
  expect(convertNumber(-16)).toEqual("minus šešiolika");
  expect(convertNumber(-15)).toEqual("minus penkiolika");
  expect(convertNumber(-14)).toEqual("minus keturiolika");
  expect(convertNumber(-13)).toEqual("minus trylika");
  expect(convertNumber(-12)).toEqual("minus dvylika");
  expect(convertNumber(-11)).toEqual("minus vienuolika");
  expect(convertNumber(-10)).toEqual("minus dešimt");
  expect(convertNumber(-9)).toEqual("minus devyni");
  expect(convertNumber(-8)).toEqual("minus aštuoni");
  expect(convertNumber(-7)).toEqual("minus septyni");
  expect(convertNumber(-6)).toEqual("minus šeši");
  expect(convertNumber(-5)).toEqual("minus penki");
  expect(convertNumber(-4)).toEqual("minus keturi");
  expect(convertNumber(-3)).toEqual("minus trys");
  expect(convertNumber(-2)).toEqual("minus du");
  expect(convertNumber(-1)).toEqual("minus vienas");
  expect(convertNumber(0)).toEqual("nulis");
  expect(convertNumber(1)).toEqual("vienas");
  expect(convertNumber(2)).toEqual("du");
  expect(convertNumber(3)).toEqual("trys");
  expect(convertNumber(4)).toEqual("keturi");
  expect(convertNumber(5)).toEqual("penki");
  expect(convertNumber(6)).toEqual("šeši");
  expect(convertNumber(7)).toEqual("septyni");
  expect(convertNumber(8)).toEqual("aštuoni");
  expect(convertNumber(9)).toEqual("devyni");
  expect(convertNumber(10)).toEqual("dešimt");
  expect(convertNumber(11)).toEqual("vienuolika");
  expect(convertNumber(12)).toEqual("dvylika");
  expect(convertNumber(13)).toEqual("trylika");
  expect(convertNumber(14)).toEqual("keturiolika");
  expect(convertNumber(15)).toEqual("penkiolika");
  expect(convertNumber(16)).toEqual("šešiolika");
  expect(convertNumber(17)).toEqual("septyniolika");
  expect(convertNumber(18)).toEqual("aštuoniolika");
  expect(convertNumber(19)).toEqual("devyniolika");
});

test("ConvertNumberToLithuanian_CorrectlyConvertsTens", () => {
  expect(convertNumber(10)).toEqual("dešimt");
  expect(convertNumber(20)).toEqual("dvidešimt");
  expect(convertNumber(30)).toEqual("trisdešimt");
  expect(convertNumber(40)).toEqual("keturiasdešimt");
  expect(convertNumber(50)).toEqual("penkiasdešimt");
  expect(convertNumber(60)).toEqual("šešiasdešimt");
  expect(convertNumber(70)).toEqual("septyniasdešimt");
  expect(convertNumber(80)).toEqual("aštuoniasdešimt");
  expect(convertNumber(90)).toEqual("devyniasdešimt");
});

test("ConvertNumberToLithuanian_CorrectlyConvertsDozensWithUnits", () => {
  expect(convertNumber(40)).toEqual("keturiasdešimt");
  expect(convertNumber(41)).toEqual("keturiasdešimt vienas");
  expect(convertNumber(42)).toEqual("keturiasdešimt du");
  expect(convertNumber(43)).toEqual("keturiasdešimt trys");
  expect(convertNumber(44)).toEqual("keturiasdešimt keturi");
  expect(convertNumber(45)).toEqual("keturiasdešimt penki");
  expect(convertNumber(46)).toEqual("keturiasdešimt šeši");
  expect(convertNumber(47)).toEqual("keturiasdešimt septyni");
  expect(convertNumber(48)).toEqual("keturiasdešimt aštuoni");
  expect(convertNumber(49)).toEqual("keturiasdešimt devyni");
});

test("ConvertNumberToLithuanian_CorrectlyConvertsHundreds", () => {
  expect(convertNumber(100)).toEqual("vienas šimtas");
  expect(convertNumber(200)).toEqual("du šimtai");
  expect(convertNumber(300)).toEqual("trys šimtai");
  expect(convertNumber(400)).toEqual("keturi šimtai");
  expect(convertNumber(500)).toEqual("penki šimtai");
  expect(convertNumber(600)).toEqual("šeši šimtai");
  expect(convertNumber(700)).toEqual("septyni šimtai");
  expect(convertNumber(800)).toEqual("aštuoni šimtai");
  expect(convertNumber(900)).toEqual("devyni šimtai");
  expect(convertNumber(999)).toEqual("devyni šimtai devyniasdešimt devyni");
});

test("ConvertNumberToLithuanian_CorrectlyConvertsThousands", () => {
  expect(convertNumber(1_000)).toEqual("vienas tūkstantis");
  expect(convertNumber(2_000)).toEqual("du tūkstančiai");
  expect(convertNumber(3_000)).toEqual("trys tūkstančiai");
  expect(convertNumber(4_000)).toEqual("keturi tūkstančiai");
  expect(convertNumber(5_000)).toEqual("penki tūkstančiai");
  expect(convertNumber(6_000)).toEqual("šeši tūkstančiai");
  expect(convertNumber(7_000)).toEqual("septyni tūkstančiai");
  expect(convertNumber(8_000)).toEqual("aštuoni tūkstančiai");
  expect(convertNumber(9_000)).toEqual("devyni tūkstančiai");
  expect(convertNumber(9_999)).toEqual(
    "devyni tūkstančiai devyni šimtai devyniasdešimt devyni"
  );
});

test("ConvertNumberToLithuanian_CorrectlyConvertsMillions", () => {
  expect(convertNumber(1_000_000)).toEqual("vienas milijonas");
  expect(convertNumber(2_000_000)).toEqual("du milijonai");
  expect(convertNumber(3_000_000)).toEqual("trys milijonai");
  expect(convertNumber(4_000_000)).toEqual("keturi milijonai");
  expect(convertNumber(5_000_000)).toEqual("penki milijonai");
  expect(convertNumber(6_000_000)).toEqual("šeši milijonai");
  expect(convertNumber(7_000_000)).toEqual("septyni milijonai");
  expect(convertNumber(8_000_000)).toEqual("aštuoni milijonai");
  expect(convertNumber(9_000_000)).toEqual("devyni milijonai");
  expect(convertNumber(9_999_999)).toEqual(
    "devyni milijonai devyni šimtai devyniasdešimt devyni tūkstančiai devyni šimtai devyniasdešimt devyni"
  );
});

test("ConvertNumberToLithuanian_CorrectlyConvertsBillions", () => {
  expect(convertNumber(1_000_000_000)).toEqual("vienas milijardas");
  expect(convertNumber(2_000_000_000)).toEqual("du milijardai");
  expect(convertNumber(3_000_000_000)).toEqual("trys milijardai");
  expect(convertNumber(4_000_000_000)).toEqual("keturi milijardai");
  expect(convertNumber(5_000_000_000)).toEqual("penki milijardai");
  expect(convertNumber(6_000_000_000)).toEqual("šeši milijardai");
  expect(convertNumber(7_000_000_000)).toEqual("septyni milijardai");
  expect(convertNumber(8_000_000_000)).toEqual("aštuoni milijardai");
  expect(convertNumber(9_000_000_000)).toEqual("devyni milijardai");
  expect(convertNumber(9_999_999_999)).toEqual(
    "devyni milijardai devyni šimtai devyniasdešimt devyni milijonai devyni šimtai devyniasdešimt devyni tūkstančiai devyni šimtai devyniasdešimt devyni"
  );
});

test("ConvertNumberToLithuanian_CorrectlyConvertsTrillions", () => {
  expect(convertNumber(1_000_000_000_000)).toEqual("vienas trilijonas");
  expect(convertNumber(2_000_000_000_000)).toEqual("du trilijonai");
  expect(convertNumber(3_000_000_000_000)).toEqual("trys trilijonai");
  expect(convertNumber(4_000_000_000_000)).toEqual("keturi trilijonai");
  expect(convertNumber(5_000_000_000_000)).toEqual("penki trilijonai");
  expect(convertNumber(6_000_000_000_000)).toEqual("šeši trilijonai");
  expect(convertNumber(7_000_000_000_000)).toEqual("septyni trilijonai");
  expect(convertNumber(8_000_000_000_000)).toEqual("aštuoni trilijonai");
  expect(convertNumber(9_000_000_000_000)).toEqual("devyni trilijonai");
  expect(convertNumber(9_999_999_999_999)).toEqual(
    "devyni trilijonai devyni šimtai devyniasdešimt devyni milijardai devyni šimtai devyniasdešimt devyni milijonai devyni šimtai devyniasdešimt devyni tūkstančiai devyni šimtai devyniasdešimt devyni"
  );
});

test("ConvertNumberToLithuanian_CorrectlyConvertsQuadrillions", () => {
  expect(convertNumber(1_000_000_000_000_000)).toEqual("vienas kvadrilijonas");
  expect(convertNumber(2_000_000_000_000_000)).toEqual("du kvadrilijonai");
  expect(convertNumber(3_000_000_000_000_000)).toEqual("trys kvadrilijonai");
  expect(convertNumber(4_000_000_000_000_000)).toEqual("keturi kvadrilijonai");
  expect(convertNumber(5_000_000_000_000_000)).toEqual("penki kvadrilijonai");
  expect(convertNumber(6_000_000_000_000_000)).toEqual("šeši kvadrilijonai");
  expect(convertNumber(7_000_000_000_000_000)).toEqual("septyni kvadrilijonai");
  expect(convertNumber(8_000_000_000_000_000)).toEqual("aštuoni kvadrilijonai");
  expect(convertNumber(9_000_000_000_000_000)).toEqual("devyni kvadrilijonai");
  expect(convertNumber(9_006_999_999_999_999)).toEqual(
    "devyni kvadrilijonai šeši trilijonai devyni šimtai devyniasdešimt devyni milijardai devyni šimtai devyniasdešimt devyni milijonai devyni šimtai devyniasdešimt devyni tūkstančiai devyni šimtai devyniasdešimt devyni"
  );
});
