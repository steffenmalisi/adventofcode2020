import fs from "fs";

async function readLinesToArray(path, mappingFunction, lineSeparator) {
  if (lineSeparator === undefined){
    lineSeparator = "\n";
  }
  const data = await fs.promises.readFile(path, "utf8");
  return data.toString().split(lineSeparator).map(mappingFunction);
}

export { readLinesToArray };
