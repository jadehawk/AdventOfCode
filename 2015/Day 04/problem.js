const md5 = require("md5");
const findHash = (input, match) => {
  let secretKey = input;
  let lowNumber = 0;

  for (var i = 0; i < 999999999; i++) {
    lowNumber = lowNumber + 1;
    let keyTest = secretKey.concat(String(lowNumber));
    let md5Result = md5(keyTest);
    let hashCheck = md5Result.startsWith(match);
    // console.log(md5Result)
    // console.log(keyTest);
    if (hashCheck === true) {
      lowNumber = i;
      return i + 1;
    }
  }
};
console.log(
  "Lowest Number to Meet Criteria Part 1#: ",
  findHash("iwrupvqb", "00000")
);
console.log(
  "Lowest Number to Meet Criteria Part 2#: ",
  findHash("iwrupvqb", "000000")
);
