import {
  parseInputData,
  calculateOccupiedSeats,
  getNumberOfOccupiedSeats,
} from "../../src/day11/seats.js";
import chai from "chai";
const { expect } = chai;

describe("The Seats Module", () => {
  it("should read the input data correctly", async () => {
    const expected = [
      ["L", ".", "L", "L", ".", "L", "L", ".", "L", "L"],
      ["L", "L", "L", "L", "L", "L", "L", ".", "L", "L"],
      ["L", ".", "L", ".", "L", ".", ".", "L", ".", "."],
      ["L", "L", "L", "L", ".", "L", "L", ".", "L", "L"],
      ["L", ".", "L", "L", ".", "L", "L", ".", "L", "L"],
      ["L", ".", "L", "L", "L", "L", "L", ".", "L", "L"],
      [".", ".", "L", ".", "L", ".", ".", ".", ".", "."],
      ["L", "L", "L", "L", "L", "L", "L", "L", "L", "L"],
      ["L", ".", "L", "L", "L", "L", "L", "L", ".", "L"],
      ["L", ".", "L", "L", "L", "L", "L", ".", "L", "L"],
    ];
    const result = await parseInputData("./test/day11/test.data");
    expect(result).to.eql(expected);
  });
});

describe("The Seats Module", () => {
  it("should calculate the total number of occupied adjecent seats", () => {
    const testData = [
      ["L", ".", "L", "L", ".", "L", "L", ".", "L", "L"],
      ["L", "L", "L", "L", "L", "L", "L", ".", "L", "L"],
      ["L", ".", "L", ".", "L", ".", ".", "L", ".", "."],
      ["L", "L", "L", "L", ".", "L", "L", ".", "L", "L"],
      ["L", ".", "L", "L", ".", "L", "L", ".", "L", "L"],
      ["L", ".", "L", "L", "L", "L", "L", ".", "L", "L"],
      [".", ".", "L", ".", "L", ".", ".", ".", ".", "."],
      ["L", "L", "L", "L", "L", "L", "L", "L", "L", "L"],
      ["L", ".", "L", "L", "L", "L", "L", "L", ".", "L"],
      ["L", ".", "L", "L", "L", "L", "L", ".", "L", "L"],
    ];
    const result = calculateOccupiedSeats(testData);
    expect(result).to.eq(37);
  });

  it("should calculate the number of occupied adjacent seats of exactly one seat", () => {
    let testData = [
      [".", ".", "#"],
      ["#", "#", "."],
      ["#", "#", "."],
    ];
    let result = getNumberOfOccupiedSeats(1, 1, testData);
    expect(result).to.be.eq(4);

    testData = [
      ["#", "#", "#"],
      ["#", "#", "#"],
      ["#", "#", "#"],
    ];
    result = getNumberOfOccupiedSeats(1, 1, testData);
    expect(result).to.be.eq(8);
  });

  it("should calculate the number of occupied seats of exactly one seat", async () => {
    let testData = await parseInputData("./test/day11/test2.data");
    let result = getNumberOfOccupiedSeats(4, 3, testData, true);
    expect(result).to.eq(8);

    testData = await parseInputData("./test/day11/test3.data");
    result = getNumberOfOccupiedSeats(1, 1, testData, true);
    expect(result).to.eq(0);

    testData = await parseInputData("./test/day11/test4.data");
    result = getNumberOfOccupiedSeats(3, 3, testData, true);
    expect(result).to.eq(0);
  });

  it("should calculate the total number of occupied seats", () => {
    const testData = [
      ["L", ".", "L", "L", ".", "L", "L", ".", "L", "L"],
      ["L", "L", "L", "L", "L", "L", "L", ".", "L", "L"],
      ["L", ".", "L", ".", "L", ".", ".", "L", ".", "."],
      ["L", "L", "L", "L", ".", "L", "L", ".", "L", "L"],
      ["L", ".", "L", "L", ".", "L", "L", ".", "L", "L"],
      ["L", ".", "L", "L", "L", "L", "L", ".", "L", "L"],
      [".", ".", "L", ".", "L", ".", ".", ".", ".", "."],
      ["L", "L", "L", "L", "L", "L", "L", "L", "L", "L"],
      ["L", ".", "L", "L", "L", "L", "L", "L", ".", "L"],
      ["L", ".", "L", "L", "L", "L", "L", ".", "L", "L"],
    ];
    const result = calculateOccupiedSeats(testData, true, 5);
    expect(result).to.eq(26);
  });
});
