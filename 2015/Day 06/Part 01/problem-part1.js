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
        GRID[i][j] = 1;
      }
    }
  },

  turnLightOFF: (rowStart, colStart, rowEnd, colEnd) => {
    for (var i = rowStart; i <= rowEnd; i++) {
      for (var j = colStart; j <= colEnd; j++) {
        GRID[i][j] = 0;
      }
    }
  },

  toggle: (rowStart, colStart, rowEnd, colEnd) => {
    for (var i = rowStart; i <= rowEnd; i++) {
      for (var j = colStart; j <= colEnd; j++) {
        switch (GRID[i][j]) {
          case 1:
            GRID[i][j] = 0;
            break;
          case 0:
            GRID[i][j] = 1;
            break;
        }
      }
    }
  },

  countLights: () => {
    for (var i = 0; i <= 999; i++) {
      for (var j = 0; j <= 999; j++) {
        GRID[i][j] == 1 ? ++COUNTER : COUNTER;
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
//FUNCTIONS.turnLightON(0, 0, 10, 10);
// FUNCTIONS.turnLightOFF(0, 0, 5, 5);
//FUNCTIONS.toggle(0, 0, 5, 5);
// FUNCTIONS.parseInstruction("turn on 599,989 through 806,993");
// FUNCTIONS.parseInstruction("turn off 370,39 through 425,839");
//FUNCTIONS.parseInstruction("turn on 50,472 through 452,788");

FUNCTIONS.distributeInsructions(PUZZLEDATA);
FUNCTIONS.countLights();
console.log("Total Light On===>", COUNTER);

module.exports = FUNCTIONS;
