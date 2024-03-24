import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./practice.js";

test("capitalize-1", () => {
  expect(capitalize("asd")).toBe("Asd");
});

test("capitalize-2", () => {
  expect(capitalize("123")).toBe("123");
});

test("capitalize-3", () => {
  expect(() => capitalize(1)).toThrow(TypeError);
});

test("reverseString-1", () => {
  expect(reverseString("asd")).toBe("dsa");
});

test("reverseString-2", () => {
  expect(reverseString("12")).toBe("21");
});

test("reverseString-3", () => {
  expect(() => reverseString(12)).toThrow(TypeError);
});

test("calculator-1", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("calculator-2", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("calculator-3", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("calculator-4", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("calculator-5", () => {
  expect(() => calculator.add("1", 2)).toThrow(TypeError);
});

test("calculator-6", () => {
  expect(() => calculator.add(1, [2])).toThrow(TypeError);
});

test("caesarCipher-1", () => {
  expect(caesarCipher("abc", 3)).toBe("DEF");
});

test("caesarCipher-2", () => {
  expect(caesarCipher("abc!?", 2)).toBe("CDEBA");
});

test("caesarCipher-3", () => {
  expect(caesarCipher("a'b[c", 5)).toBe("F'G[H");
});

test("caesarCipher-4", () => {
  expect(caesarCipher("aaaa", 3)).toBe("DDDD");
});

test("caesarCipher-5", () => {
  expect(caesarCipher("AaaA", 3)).toBe("DDDD");
});

test("caesarCipher-6", () => {
  expect(caesarCipher("abc", 123)).toBe("!AB");
});

test("caesarCipher-7", () => {
  expect(caesarCipher("abc", -3)).toBe(",?!");
});

test("caesarCipher-8", () => {
  expect(() => caesarCipher(123, 3)).toThrow(TypeError);
});

test("caesarCipher-9", () => {
  expect(() => caesarCipher("abc", "3")).toThrow(TypeError);
});

test("caesarCipher-10", () => {
  expect(() => caesarCipher(123, "3")).toThrow(TypeError);
});

test("analyzeArray-1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyzeArray-2", () => {
  expect(() => analyzeArray(183426)).toThrow(TypeError);
});

test("analyzeArray-3", () => {
  expect(() => analyzeArray([1, 8, 3, 4, "2", 6])).toThrow(TypeError);
});

test("analyzeArray-4", () => {
  expect(analyzeArray([-1, 8, -3, 4, -2, 6])).toEqual({
    average: 2,
    min: -3,
    max: 8,
    length: 6,
  });
});

test("analyzeArray-5", () => {
  expect(analyzeArray([1.5, 8.5, 3.5, 4.5, 2.5, 6.5])).toEqual({
    average: 4.5,
    min: 1.5,
    max: 8.5,
    length: 6,
  });
});

test("analyzeArray-6", () => {
  expect(analyzeArray([1e2, 8e2, 3e2, 4e2, 2e2, 6e2])).toEqual({
    average: 400,
    min: 100,
    max: 800,
    length: 6,
  });
});
