const functions = {
    getDataReady: () => {
        let DATA = [];
        let DATA2 = [];
        let DATA3 = [];

        require("fs")
            .readFileSync("puzzledata.txt")
            .toString()
            .split("\n")
            .forEach(function (line) {
                DATA.push(line);
            });
        DATA.map(line => {
            DATA2.push(line.replace("\r", ""));
        });
        DATA2.map(line => {
            let nline = String(line).split("x");
            DATA3.push(nline);
        });

        let l = 0;
        let w = 0;
        let h = 0;
        let sm = 0;
        let area = 0;
        let area2 = 0;
        let allBoxesArea = 0;
        let val1 = 0;
        let val2 = 0;
        let val3 = 0;
        let arr2 = [];
        DATA3.map(line => {
            l = line[0];
            w = line[1];
            h = line[2];

            area = 2 * l * w + 2 * w * h + 2 * h * l;
            val1 = l * w;
            val2 = w * h;
            val3 = h * l;
            arr2 = [val1, val2, val3];
            sm = Math.min(...arr2);
            allBoxesArea = allBoxesArea + area + sm;
        });

        let allBoxesAreaWithRibbon = 0;
        let val4 = 0;
        let val5 = 0;
        let val6 = 0;
        let perimeter = 0;
        let ribbon = 0;
        let sum = 0;
        let arr3 = [];

        DATA3.map(line => {
            arr3 = line.sort(function (a, b) {
                return a - b;
            });

            val4 = arr3[0];
            val5 = arr3[1];
            val6 = arr3[2];
            perimeter = val4 * val5 * val6;
            ribbon = 2 * val4 + 2 * val5;
            sum = perimeter + ribbon;
            allBoxesAreaWithRibbon = allBoxesAreaWithRibbon + sum;
        });
        console.log("Paper Required for ALL Boxes = ", allBoxesArea);
        console.log("Paper Required for ALL Boxes Plus Ribbon = ", allBoxesAreaWithRibbon);
        return { allBoxesArea: allBoxesArea, allBoxesAreaWithRibbon: allBoxesAreaWithRibbon }
    }
};

functions.getDataReady();