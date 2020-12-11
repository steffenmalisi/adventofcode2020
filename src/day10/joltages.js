import { readLinesToArray } from "../file-util.js";

async function parseInputData(path) {
  const data = await readLinesToArray(path, (l) => {
    return (l = l * 1);
  });
  return data.sort((a, b) => a - b);
}

function calculateDistributionOfJoltageDifferences(data) {
  let numberOf1JoltDifferences = 0;
  let numberOf3JoltDifferences = 0;

  data.unshift(0);
  data.push(data[data.length - 1] + 3);

  for (let i = 1; i < data.length; i++) {
    const joltageDifference = data[i] - data[i - 1];
    if (joltageDifference <= 3) {
      if (joltageDifference === 1) {
        numberOf1JoltDifferences++;
      } else if (joltageDifference === 3) {
        numberOf3JoltDifferences++;
      }
    } else {
      console.log(
        `Joltage difference of next possible apdapter is larger than 3:
        ${data[i - 1]} -> ${data[i]}. Your adapters can not be used.`
      );
      return -1;
    }
  }

  return numberOf1JoltDifferences * numberOf3JoltDifferences;
}

function calculateNumberOfPossibleArrangements(data) {
  if (data[0] !== 0) {
    data.unshift(0);
  }
  data.push([data[data.length - 1] + 3, 1]);

  for (let i = data.length - 2; i >= 0; i--) {
    const successors = findSuccessorsOfIndex(i, data);
    const sumOfSuccessorTransitions = getSumOfSuccessorTransitions(successors, data);
    data[i] = [data[i], sumOfSuccessorTransitions];
  }
  return data[0][1];
}

function getSumOfSuccessorTransitions(indices, data) {
  let sum = 0;
  for (const index of indices) {
    const elem = data[index];
    if (!elem) {
      console.warn(`${index} is not a valid index`);
    } else {
      sum = sum + elem[1];
    }
  }
  return sum;
}

function findSuccessorsOfIndex(index, data) {
  const successors = [];
  for (
    let y = index + 1;
    y < data.length && data[y][0] - data[index] <= 3;
    y++
  ) {
    successors.push(y);
  }
  return successors;
}

export {
  parseInputData,
  calculateDistributionOfJoltageDifferences,
  calculateNumberOfPossibleArrangements,
};
