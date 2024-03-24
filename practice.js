export function capitalize(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be string");
  }
  const strEnd = str.slice(1);
  return str[0].toUpperCase() + strEnd;
}

export function reverseString(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be string");
  }
  return str.split("").reverse().join("");
}

function Calculator() {
  return {
    add(a, b) {
      if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Inputs must be number");
      }
      return a + b;
    },
    subtract(a, b) {
      if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Inputs must be number");
      }
      return a - b;
    },
    divide(a, b) {
      if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Inputs must be number");
      }
      return a / b;
    },
    multiply(a, b) {
      if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Inputs must be number");
      }
      return a * b;
    },
  };
}

export const calculator = new Calculator();

function shiftEncryption(ulib, lib, ustr) {
  let str = [];
  for (let i = 0; i < ustr.length; i++) {
    if (ulib.indexOf(ustr[i]) === -1) {
      str.push(ustr[i]);
    } else {
      str.push(lib[ulib.indexOf(ustr[i])]);
    }
  }
  return str.join("");
}

export function caesarCipher(str, shiftfactor) {
  if (typeof str !== "string" || !Number.isInteger(shiftfactor)) {
    throw new TypeError("Inputs must be string + integer");
  }
  const unencryptedLib = " .,?!ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  shiftfactor %= unencryptedLib.length;
  const encryptedLib = unencryptedLib
    .slice(shiftfactor)
    .concat(unencryptedLib.slice(0, shiftfactor));
  const unencryptedStr = str.toUpperCase().split("");
  const encryptedStr = shiftEncryption(
    unencryptedLib,
    encryptedLib,
    unencryptedStr,
  );
  return encryptedStr;
}

export function analyzeArray(numArr) {
  if (!Array.isArray(numArr)) {
    throw new TypeError("Input must be number array");
  }
  numArr.forEach((x) => {
    if (typeof x !== "number") {
      throw new TypeError("Input must be number array");
    }
  });
  return {
    average: numArr.reduce((acc, x) => acc + x, 0) / numArr.length,
    min: Math.min(...numArr),
    max: Math.max(...numArr),
    length: numArr.length,
  };
}
