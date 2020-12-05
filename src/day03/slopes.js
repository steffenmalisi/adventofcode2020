import { readLinesToArray } from "../file-util.js";
import colors from "colors";

async function parseInputData(path) {
  return readLinesToArray(path, (l) => {
    return [...l];
  });
}

function countHitTrees(data, mapTraversals) {
  let counterProduct = 1;
  for (const traversal of mapTraversals) {
    console.log(`\n****** [x=${traversal.x}, y=${traversal.y}] ******`);
    let counter = 0;
    let x = 0;
    const lineLength = data[0].length;
    for (let y = 0; y < data.length; y = y + traversal.y) {
      const square = data[y][x];
      if (square === "#") {
        counter++;
        data[y][x] = square.bgBlack.yellow; // only needed for pretty log output - color tree hits
      } else {
        data[y][x] = square.bgBlack.cyan; // only needed for pretty log output - color blanks
      }
      console.log(data[y].join(""));

      data[y][x] = square; // only needed for pretty log output - reset

      x = x + traversal.x;
      if (x >= lineLength) {
        x = x - lineLength;
      }
    }
    console.log(`Traversal result: ${counter}`);
    counterProduct = counterProduct * counter;
  }
  return counterProduct;
}

export { parseInputData, countHitTrees };
