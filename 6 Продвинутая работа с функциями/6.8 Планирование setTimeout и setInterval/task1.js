function printNumbersInterval(from, to) {
  let number = from;

  let timer = setInterval(function () {
    console.log(number);
    if (number == to) {
      clearInterval(timer);
    }
    number++;
  }, 1000);
}

function printNumbersTimeout(from, to) {
  let number = from;

  setTimeout(function step() {
    console.log(number);
    if (number < to) {
      setTimeout(step, 1000);
    }
    number++;
  }, 1000);
}

printNumbersInterval(1, 5);
printNumbersTimeout(1, 5);
