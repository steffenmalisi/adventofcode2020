import { parseInputData, countPassportsWithAllRequiredFields, countPassportsWithValidFields } from "./passports.js";

async function main () {
  const data = await parseInputData('./src/day04/input.data');
  let result = countPassportsWithAllRequiredFields(data);
  console.log(result);
  result = countPassportsWithValidFields(data);
  console.log(result);
}

main();