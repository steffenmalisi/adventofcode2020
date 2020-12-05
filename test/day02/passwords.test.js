import {
  parseInputData,
  findNumberOfCorrectPasswords,
  findNumberOfCorrectPasswordsAdvanced,
} from "../../src/day02/passwords.js";
import chai from "chai";
const { expect } = chai;

describe("The password repair module", () => {
  it("should parse the input correctly", () => {
    const expected = [
      { policy: {min: 1, max: 3, chars: "a"}, password: "abcde" },
      { policy: {min: 1, max: 3, chars: "b"}, password: "cdefg" },
      { policy: {min: 2, max: 9, chars: "c"}, password: "ccccccccc" },
    ];
    return parseInputData("./test/day02/test.data").then((data, err) => {
      if (err) {
        console.error(err);
      }
      expect(data).to.eql(expected);
    });
  });
});

describe("The password repair module", () => {
  it("should find the correct number of valid passwords", () => {
    const testData = [
      { policy: {min: 1, max: 3, chars: "a"}, password: "abcde" },
      { policy: {min: 1, max: 3, chars: "b"}, password: "cdefg" },
      { policy: {min: 2, max: 9, chars: "c"}, password: "ccccccccc" },
    ];
    const numberOfCorrectPasswords = findNumberOfCorrectPasswords(testData);
    expect(numberOfCorrectPasswords).to.equal(2);
  });
});

describe("The password repair module", () => {
  it("should find the correct number of valid passwords in advanced mode", () => {
    const testData = [
      { policy: {min: 1, max: 3, chars: "a"}, password: "abcde" },
      { policy: {min: 1, max: 3, chars: "b"}, password: "cdefg" },
      { policy: {min: 2, max: 9, chars: "c"}, password: "ccccccccc" },
    ];
    const numberOfCorrectPasswords = findNumberOfCorrectPasswordsAdvanced(testData);
    expect(numberOfCorrectPasswords).to.equal(1);
  });

  it("should not find a match", () => {
    const testData = [
      { policy: {min: 12, max: 13, chars: "a"}, password: "abcde" },
    ];
    const numberOfCorrectPasswords = findNumberOfCorrectPasswordsAdvanced(testData);
    expect(numberOfCorrectPasswords).to.equal(0);
  });

  it("should find a match even if the character is contained mulitple times", () => {
    const testData = [
      { policy: { min: 5, max: 6, chars: 'p' }, password: 'hpzplphxb' },
    ];
    const numberOfCorrectPasswords = findNumberOfCorrectPasswordsAdvanced(testData);
    expect(numberOfCorrectPasswords).to.equal(1);
  });
});