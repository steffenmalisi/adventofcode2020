import { readLinesToArray } from "../file-util.js";

async function parseInputData(path) {
  return readLinesToArray(path, (l) => {
    const linePattern = /^(?<min>\d+)-(?<max>\d+)\s(?<chars>.+):\s(?<password>.+)$/;
    const parts = l.match(linePattern);
    if (!parts || parts.length !== 5) {
      throw `Line '${l}' does not match required format: ${linePattern}`;
    }

    return {
      policy: {
        min: parts.groups.min * 1,
        max: parts.groups.max * 1,
        chars: parts.groups.chars,
      },
      password: parts.groups.password,
    };
  });
}

function findNumberOfCorrectPasswords(passwordList) {
  let matchCounter = 0;
  passwordList.forEach((e) => {
    // prettier-ignore
    const regex = `(?=(.*[${e.policy.chars}]){${e.policy.min},})(?!(.*[${e.policy.chars}]){${e.policy.max + 1},})^\\S*$`;
    if (e.password.match(regex)) {
      matchCounter++;
    }
  });
  return matchCounter;
}

function findNumberOfCorrectPasswordsAdvanced(passwordList) {
  let matchCounter = 0;
  passwordList.forEach((e) => {
    const indices = [...e.password.matchAll(e.policy.chars)]
      .map((m) => m.index)
      .filter((i) => i === e.policy.min - 1 || i === e.policy.max - 1);
    if (indices.length === 1) {
      matchCounter++;
    } else {
    }
  });
  return matchCounter;
}

export {
  parseInputData,
  findNumberOfCorrectPasswords,
  findNumberOfCorrectPasswordsAdvanced,
};
