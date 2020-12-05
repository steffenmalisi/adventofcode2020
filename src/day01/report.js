import { readLinesToArray } from "../file-util.js";

function repairReport(reportData) {
  for (let i = 0; i < reportData.length; i++) {
    const element = reportData[i];
    if (element <= 2020) {
      const searchValue = 2020 - element;
      // find the searchValue, but exclude the element index from possible matches
      // this way the array has not to be copied
      const match = reportData.find((e, y) => (y !== i && e === searchValue));
      if (match !== undefined) {
        return element * match;
      }
    }
  }
  return 0;
}

function repairReportAdvanced(reportData) {
  for (let i = 0; i < reportData.length; i++) {
    const element = reportData[i];
    if (element <= 2020) {
      const searchValue = 2020 - element;
      const candidates = reportData.filter((e, y) => (y !== i && e <= searchValue));
      for (let i2 = 0; i2 < candidates.length; i2++) {
        const element2 = candidates[i2];
        const searchValue2 = searchValue - element2;
        const match = reportData.find((e, y) => (y !== i && y !== i2 && e === searchValue2));
        if (match !== undefined) {
          return element * element2 * match;
        }
      }
    }
  }
  return 0;
}

async function parseInputData(path) {
  return readLinesToArray(path,  n => n * 1);
}

export { repairReport, repairReportAdvanced, parseInputData };
