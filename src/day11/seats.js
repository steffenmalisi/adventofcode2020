import { readLinesToArray } from "../file-util.js";

async function parseInputData(path) {
  return readLinesToArray(path, (l) => {
    return [...l];
  });
}

function calculateOccupiedSeats(data, bubble, minThreshold) {
  minThreshold = minThreshold === undefined ? 4 : minThreshold;
  let newData;
  let proceed;
  do {
    newData = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      newData[i] = new Array(data[0].length);
    }
    for (let y = 0; y < data.length; y++) {
      for (let x = 0; x < data[y].length; x++) {
        const seat = data[y][x];
        if (seat !== ".") {
          const no = getNumberOfOccupiedSeats(y, x, data, bubble);
          if (seat === "#" && no >= minThreshold) {
            newData[y][x] = "L";
          } else if (seat === "L" && no === 0) {
            newData[y][x] = "#";
          } else {
            newData[y][x] = seat;
          }
        } else {
          newData[y][x] = seat;
        }
      }
    }
    proceed = JSON.stringify(data) !== JSON.stringify(newData);
    data = newData;
  } while (proceed);

  return newData
    .map((row) => row.filter((seat) => seat === "#").length)
    .reduce((a, b) => a + b);
}

const directions = [
  (y, x) => [y - 1, x - 1],
  (y, x) => [y + 0, x - 1],
  (y, x) => [y + 1, x - 1],
  (y, x) => [y + 1, x + 0],
  (y, x) => [y + 1, x + 1],
  (y, x) => [y + 0, x + 1],
  (y, x) => [y - 1, x + 1],
  (y, x) => [y - 1, x + 0],
];

function getNumberOfOccupiedSeats(y, x, data, bubble) {
  bubble = bubble === undefined ? false : bubble;
  return directions
    .map((d) => {
      let i = [y, x];
      do {
        i = d(i[0], i[1]);
      } while (
        bubble &&
        data[i[0]] &&
        data[i[0]][i[1]] &&
        data[i[0]][i[1]] === "."
      );
      return data[i[0]] && data[i[0]][i[1]] && data[i[0]][i[1]] === "#" ? 1 : 0;
    })
    .reduce((a, b) => a + b);
}

export { parseInputData, calculateOccupiedSeats, getNumberOfOccupiedSeats };
