import { readLinesToArray } from "../file-util.js";
import {
  parseInputData,
  findNumberOfCorrectPasswords,
  findNumberOfCorrectPasswordsAdvanced,
} from "./passwords.js";

async function main() {
  try {
    const input = await parseInputData("./src/day02/input.data");
    const result = findNumberOfCorrectPasswords(input);
    console.log(result);
    const result2 = findNumberOfCorrectPasswordsAdvanced(input);
    console.log(result2);
  } catch (err) {
    console.error(err);
  }
}

main();
