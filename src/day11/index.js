import {
  parseInputData,
  calculateOccupiedSeats,
} from "./seats.js";

async function main() {
  const data = await parseInputData("./src/day11/input.data");
  let result = calculateOccupiedSeats(data);
  console.log(result);
  result = calculateOccupiedSeats(data, true, 5);
  console.log(result);
}

main();
