import { readLinesToArray } from "../file-util.js";

async function parseInputData(path) {
  return readLinesToArray(
    path,
    (l) => {
      return l.replace(/\n/gi, " ").trim();
    },
    "\n\n"
  );
}

function countPassportsWithAllRequiredFields(data) {
  return checkPassports(data, (fieldMap) => hasAllRequiredFields(fieldMap));
}

function countPassportsWithValidFields(data) {
  return checkPassports(data, (fieldMap) => {
    if (hasAllRequiredFields(fieldMap)) {
      return areAllFieldsValid(fieldMap);
    }
  });
}

function checkPassports(data, validationFunction) {
  let counter = 0;
  for (const passport of data) {
    const fieldMap = new Map();
    const fields = passport.split(" ");
    for (const field of fields) {
      const keyValue = field.split(":");
      fieldMap.set(keyValue[0], keyValue[1]);
    }
    if (validationFunction(fieldMap)) {
      counter++;
    }
  }
  return counter;
}

function hasAllRequiredFields(fieldMap) {
  if (fieldMap.size < 7) {
    return false;
  } else if (fieldMap.size === 7) {
    return !fieldMap.has("cid");
  } else {
    return true;
  }
}

function areAllFieldsValid(fieldMap) {
  return (
    isBirthYearValid(fieldMap.get("byr")) &&
    isIssueYearValid(fieldMap.get("iyr")) &&
    isExpirationYearValid(fieldMap.get("eyr")) &&
    isHeightValid(fieldMap.get("hgt")) &&
    isHairColorValid(fieldMap.get("hcl")) &&
    isEyeColorValid(fieldMap.get("ecl")) &&
    isPassportIdValid(fieldMap.get("pid"))
  );
}

function isBirthYearValid(birthYear) {
  const isValid = matchNumberBetween(birthYear, 1920, 2002);
  //console.log(`birthYear ${birthYear} ${isValid?'valid':'invalid'}`);
  return isValid;
}

function isIssueYearValid(issueYear) {
  const isValid = matchNumberBetween(issueYear, 2010, 2020);
  //console.log(`issueYear ${issueYear} ${isValid?'valid':'invalid'}`);
  return isValid;
}

function isExpirationYearValid(expirationYear) {
  const isValid = matchNumberBetween(expirationYear, 2020, 2030);
  //console.log(`expirationYear ${expirationYear} ${isValid?'valid':'invalid'}`);
  return isValid;
}

function matchNumberBetween(number, min, max) {
  number = number * 1;
  return number >= min && number <= max;
}

function isHeightValid(height) {
  const match = height.match(/^(?<height>\d+)(?<unit>[cmin]{2})$/);
  if (!match) {
    //console.log(`height ${height} does not match pattern.`);
    return false;
  }
  let isValid = false;
  switch (match.groups.unit) {
    case "cm":
      isValid = matchNumberBetween(match.groups.height, 150, 193);
      //console.log(`height ${height} ${isValid?'valid':'invalid'}`);
      return isValid;
    case "in":
      isValid = matchNumberBetween(match.groups.height, 59, 76);
      //console.log(`height ${height} ${isValid?'valid':'invalid'}`);
      return isValid;
    default:
      //console.log(`unit unknown: ${match.groups.unit}`);
      return false;
  }
}

function isHairColorValid(hairColor) {
  const isValid = hairColor.match(/^#[0-9a-f]{6}$/);
  //console.log(`hairColor ${hairColor} ${isValid?'valid':'invalid'}`);
  return isValid;
}

function isEyeColorValid(eyeColor) {
  const isValid = eyeColor.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/);
  //console.log(`eyeColor ${eyeColor} ${isValid?'valid':'invalid'}`);
  return isValid;
}

function isPassportIdValid(passportId) {
  const isValid = passportId.match(/^\d{9}$/);
  //console.log(`passportId ${passportId} ${isValid?'valid':'invalid'}`);
  return isValid;
}

export {
  parseInputData,
  countPassportsWithAllRequiredFields,
  countPassportsWithValidFields,
};
