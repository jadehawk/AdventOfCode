/*****************************************************************/
//********************* PART 1 ***********************************/
/*****************************************************************/

let fs = require("fs");
PUZZLEDATA = fs.readFileSync("./puzzledata.txt", "utf8").split("\n"); //Load text and split into Array

const BAD_LETTERS = ["ab", "cd", "pq", "xy"];
const VOWELS = ["a", "e", "i", "o", "u"];
const DOUBLE_LETTERS = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .map(letter => letter + letter);

const checkStringNOBADLETTERS = input =>
  BAD_LETTERS.some(badletter => input.indexOf(badletter) !== -1); // a TRUE value is no good, so we must reverse before final check

const checkStringDOUBLE_LETTERS = input =>
  DOUBLE_LETTERS.some(dletter => input.indexOf(dletter) !== -1);

const checkStringVOWELS = input =>
  input
    .split("")
    .reduce(
      (accumulator, letter) =>
        VOWELS.indexOf(letter) === -1 ? accumulator : ++accumulator,
      0
    ) >= 3;

const isThisStringGood = input =>
  !checkStringNOBADLETTERS(input) && // Value get reverse here. all TRUE become False..
  checkStringDOUBLE_LETTERS(input) &&
  checkStringVOWELS(input);

const AllGoodStrings = PUZZLEDATA.reduce(
  (goodStrings, line) => (isThisStringGood(line) ? ++goodStrings : goodStrings), // adds all TRUE results to goodStrings counter
  0
);

/*****************************************************************/
//********************* PART 2 ***********************************/
/*****************************************************************/

const PATT1 = /([\w][\w]).*\1/; // searches for double letters that repeat twice only.
const PATT2 = /([\w])[\w]\1/; // searches for repeat letter with another letter in between.
const newDoubleLetter = input => PATT1.test(input);
const newBetweenLetter = input => PATT2.test(input);

const isNewTestGood = input =>
  newDoubleLetter(input) && newBetweenLetter(input);

const AllGoodStrings2 = PUZZLEDATA.reduce(
  (goodStrings2, line) => (isNewTestGood(line) ? ++goodStrings2 : goodStrings2),
  0
);

/*****************************************************************/
//****************** PART 1 Refactored into RegEx   **************/
/*****************************************************************/
const PATT3 = /(ab|cd|pq|xy)/; // finds the BAD Letters
const PATT4 = /(a.*|e.*|i.*|o.*|u.*){3}/; // finds 3 vowels
const PATT5 = /(\w)\1/; // finds doubles
const checkStringNOBADLETTERS2 = input => PATT3.test(input);

const checkStringVOWELS2 = input => PATT4.test(input);

const checkStringDOUBLE_LETTERS2 = input => PATT5.test(input);

const isThisStringGood2 = input =>
  !checkStringNOBADLETTERS2(input) && // Value get reverse here. all TRUE become False..
  checkStringVOWELS2(input) &&
  checkStringDOUBLE_LETTERS2(input);

const AllGoodStrings3 = PUZZLEDATA.reduce(
  (goodStrings, line) =>
    isThisStringGood2(line) ? ++goodStrings : goodStrings, // adds all TRUE results to goodStrings counter
  0
);

console.clear();
console.log("The Number of Good Lines For PART 1 are ====>>> ", AllGoodStrings);
console.log(
  "The Number of Good Lines For PART 1 Refactored to RegEx are ====>>> ",
  AllGoodStrings3
);
console.log(
  "The Number of Good Lines For PART 2 are ====>>> ",
  AllGoodStrings2
);
