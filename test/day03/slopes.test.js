import { countHitTrees, parseInputData } from "../../src/day03/slopes.js";
import chai from "chai";
const { expect } = chai;

describe("The Slope Module", () => {
  it("should read the input data correctly", async () => {
    const expected = [
      [".", ".", "#", "#", ".", ".", ".", ".", ".", ".", "."],
      ["#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "."],
      [".", "#", ".", ".", ".", ".", "#", ".", ".", "#", "."],
      [".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#"],
      [".", "#", ".", ".", ".", "#", "#", ".", ".", "#", "."],
      [".", ".", "#", ".", "#", "#", ".", ".", ".", ".", "."],
      [".", "#", ".", "#", ".", "#", ".", ".", ".", ".", "#"],
      [".", "#", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
      ["#", ".", "#", "#", ".", ".", ".", "#", ".", ".", "."],
      ["#", ".", ".", ".", "#", "#", ".", ".", ".", ".", "#"],
      [".", "#", ".", ".", "#", ".", ".", ".", "#", ".", "#"],
    ];
    const result = await parseInputData("./test/day03/test.data");
    expect(result).to.eql(expected);
  });
});

describe("The Slope Module", () => {
  it("should count the hit trees correctly", () => {
    const testData = [
      [".", ".", "#", "#", ".", ".", ".", ".", ".", ".", "."],
      ["#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "."],
      [".", "#", ".", ".", ".", ".", "#", ".", ".", "#", "."],
      [".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#"],
      [".", "#", ".", ".", ".", "#", "#", ".", ".", "#", "."],
      [".", ".", "#", ".", "#", "#", ".", ".", ".", ".", "."],
      [".", "#", ".", "#", ".", "#", ".", ".", ".", ".", "#"],
      [".", "#", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
      ["#", ".", "#", "#", ".", ".", ".", "#", ".", ".", "."],
      ["#", ".", ".", ".", "#", "#", ".", ".", ".", ".", "#"],
      [".", "#", ".", ".", "#", ".", ".", ".", "#", ".", "#"],
    ];
    const mapTraversals = [
      { x: 1, y: 1 },
      { x: 3, y: 1 },
      { x: 5, y: 1 },
      { x: 7, y: 1 },
      { x: 1, y: 2 },
    ];
    const result = countHitTrees(testData, mapTraversals);
    expect(result).to.be.equal(336);
  });

  it("should count the hit trees correctly", async () => {
    const testData = await parseInputData("./test/day03/test2.data");
    const result = countHitTrees(testData, [{ x: 3, y: 1 }]);
    expect(result).to.be.equal(18);
  });

  it("should count the hit trees correctly when traversing more than one on y axis", async () => {
    const testData = await parseInputData("./test/day03/test.data");
    const result = countHitTrees(testData, [{ x: 1, y: 2 }]);
    expect(result).to.be.equal(2);
  });
});
