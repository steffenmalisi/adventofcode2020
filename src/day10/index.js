import {
  parseInputData,
  calculateDistributionOfJoltageDifferences,
  calculateNumberOfPossibleArrangements,
} from "./joltages.js";

async function main() {
  const data = await parseInputData("./src/day10/input.data");
  let result = calculateDistributionOfJoltageDifferences(data);
  console.log(result);
  result = calculateNumberOfPossibleArrangements(data);
  console.log(result);
}

main();
