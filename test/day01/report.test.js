import { parseInputData, repairReport, repairReportAdvanced } from "../../src/day01/report.js";
import chai from "chai";
const { expect } = chai;

describe("Test the correct output of repairReport", () => {
  it("with a small data set", () => {
    const testData = [1721, 979, 366, 299, 675, 1456];
    const result = repairReport(testData);
    expect(result).to.equal(514579);
  });

  it("with duplicates", () => {
    const testData = [1721, 1721, 979, 366, 299, 675, 1456];
    const result = repairReport(testData);
    expect(result).to.equal(514579);
  });

  it("with duplicate counterpart", () => {
    const testData = [1721, 979, 366, 299, 299, 675, 1456];
    const result = repairReport(testData);
    expect(result).to.equal(514579);
  });

  it("with no matching counterpart", () => {
    const testData = [1721, 979, 366, 675, 1456];
    const result = repairReport(testData);
    expect(result).to.equal(0);
  });

  it("with one element being 2020/2", () => {
    const testData = [1010, 979, 366, 299, 675, 1456];
    const result = repairReport(testData);
    expect(result).to.equal(0);
  });

});

describe("Test the correct output of repairReportAdvanced", () => {
  it("with a small data set", () => {
    const testData = [1721, 979, 366, 299, 675, 1456];
    const result = repairReportAdvanced(testData);
    expect(result).to.equal(241861950);
  });
});

describe("Test the correct parsing of the file", () => {
  it("with valid input", () => {
    const expected = [1721, 979, 366, 299, 675, 1456];
    return parseInputData('./test/day01/test1.data').then((data, err) => {
      expect(data).to.have.ordered.members(expected);
    });
  });
});