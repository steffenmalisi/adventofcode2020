import { parseInputData, countHitTrees } from "./slopes.js";

async function main () {
  const mapTraversals = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 },
  ];
  const data = await parseInputData('./src/day03/input.data');
  const result = countHitTrees(data, mapTraversals);
  console.log(result);
}

main();