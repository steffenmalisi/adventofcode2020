import {
  repairReport,
  repairReportAdvanced,
  parseInputData,
} from "./report.js";

async function main() {
  try {
    const inputData = await parseInputData("./src/day01/input.data");
    const repairReportResult = repairReport(inputData);
    console.log(repairReportResult);
    const repairReportAdvancedResult = repairReportAdvanced(inputData);
    console.log(repairReportAdvancedResult);
  } catch (err) {
    console.error(err);
  }
}

main();
