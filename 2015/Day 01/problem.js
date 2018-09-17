const functions = {
  add: (num1, num2) => num1 + num2,

  question1: (data) => {
    let directionsArray = data.split("");
    let answer = directionsArray.reduce((accumulator, currentValue, index) => {
      if (currentValue === "(") {
        return (accumulator += 1);
      }
      else if (currentValue === ")") {
        return (accumulator -= 1);
      }
    }, 0);
    return answer;
  },

  question2: (data) => {
    let step = 0;
    let position = 0;
    let directionsArray = data.split("");
    directionsArray.some(
      (currentItem) => {
        if (currentItem === "(") {
          step += +1;
        }
        else if (currentItem === ")") {
          step -= 1;
        }
        position++
        return step < 0;
      }
    );

    return position
  }
};


module.exports = functions;
