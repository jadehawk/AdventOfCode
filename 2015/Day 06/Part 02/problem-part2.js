let fs = require("fs");
PUZZLEDATA = fs.readFileSync("./puzzledata.txt", "utf8").split("\n");

const GRID = new Array(1001);
for (var i = 0; i < 1001; i++) {
  GRID[i] = new Array(1001);
}
/////// initialize Light Array ALL OFF //////////
for (var i = 0; i <= 999; i++) {
  for (var j = 0; j <= 999; j++) {
    GRID[i][j] = 0;
  }
}
/////////////////////////////////////////////////

let COUNTER = 0;

const FUNCTIONS = {
  turnLightON: (rowStart, colStart, rowEnd, colEnd) => {
    for (var i = rowStart; i <= rowEnd; i++) {
      for (var j = colStart; j <= colEnd; j++) {
        GRID[i][j] = GRID[i][j] + 1;
      }
    }
  },

  turnLightOFF: (rowStart, colStart, rowEnd, colEnd) => {
    for (var i = rowStart; i <= rowEnd; i++) {
      for (var j = colStart; j <= colEnd; j++) {
        GRID[i][j] === 0 ? (GRID[i][j] = 0) : (GRID[i][j] = GRID[i][j] - 1);
      }
    }
  },

  toggle: (rowStart, colStart, rowEnd, colEnd) => {
    for (var i = rowStart; i <= rowEnd; i++) {
      for (var j = colStart; j <= colEnd; j++) {
        GRID[i][j] = GRID[i][j] + 2;
      }
    }
  },

  countLights: () => {
    for (var i = 0; i <= 999; i++) {
      for (var j = 0; j <= 999; j++) {
        COUNTER = COUNTER + GRID[i][j];
      }
    }
    return COUNTER;
  },

  parseInstruction: input => {
    let PATT = /(\w+) (\d+),(\d+) \w+ (\d+),(\d+)/; // Gr#1 On/Off/Toggle Gr#2,Gr#3,Gr#4,Gr#5 have Coordinates
    let matches = input.match(PATT);

    if (matches[1] === "on") {
      FUNCTIONS.turnLightON(
        parseInt(matches[2]),
        parseInt(matches[3]),
        parseInt(matches[4]),
        parseInt(matches[5])
      );
    }
    if (matches[1] === "off") {
      FUNCTIONS.turnLightOFF(
        parseInt(matches[2]),
        parseInt(matches[3]),
        parseInt(matches[4]),
        parseInt(matches[5])
      );
    }
    if (matches[1] === "toggle") {
      FUNCTIONS.toggle(
        parseInt(matches[2]),
        parseInt(matches[3]),
        parseInt(matches[4]),
        parseInt(matches[5])
      );
    }
  },

  distributeInsructions: input => {
    input.map(line => FUNCTIONS.parseInstruction(line));
  }
}; //FUNTIONS ENDLINE

console.clear();

FUNCTIONS.distributeInsructions(PUZZLEDATA);
FUNCTIONS.countLights();
console.log("Total Light On===>", COUNTER);

module.exports = FUNCTIONS;
