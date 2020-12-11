import {
  calculateDistributionOfJoltageDifferences,
  calculateNumberOfPossibleArrangements,
  parseInputData,
} from "../../src/day10/joltages.js";
import chai from "chai";
const { expect } = chai;

describe("The Joltages Module", () => {
  it("should read the input data correctly", async () => {
    const expected = [1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19];
    const result = await parseInputData("./test/day10/test.data");
    expect(result).to.eql(expected);
  });
});

describe("The Joltages Module", () => {
  it("should calculate the distribution of joltage differences", () => {
    const testData = [1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19];
    const result = calculateDistributionOfJoltageDifferences(testData);
    expect(result).to.eq(35);
  });

  it("should read the input and calculate the distribution of joltage differences", async () => {
    const testData = await parseInputData("./test/day10/test2.data");
    const result = calculateDistributionOfJoltageDifferences(testData);
    expect(result).to.be.eq(220);
  });

  it("should calculate the number of possible adapter arrangements", () => {
    let testData = [1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19];
    let result = calculateNumberOfPossibleArrangements(testData);
    expect(result).to.be.eq(8);

    testData = [1, 2, 3, 4, 5, 8, 11];
    result = calculateNumberOfPossibleArrangements(testData);
    expect(result).to.be.eq(13);
  });

  it('should read the input and should calculate the number of possible adapter arrangements', async () => {
    const testData = await parseInputData("./test/day10/test2.data");
    const result = calculateNumberOfPossibleArrangements(testData);
    expect(result).to.be.eq(19208);
  });
});
