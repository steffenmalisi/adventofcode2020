import fs from "fs";

async function readLinesToArray(path, mappingFunction) {
  const data = await fs.promises.readFile(path, "utf8");
  return data.toString().split("\n").map(mappingFunction);
}

export { readLinesToArray };
