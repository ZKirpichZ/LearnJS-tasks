function Calculator() {
  this.results = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    let expression = str.split(" ");
    a = +expression[0];
    b = +expression[2];
    operation = expression[1];

    if (!this.results[operation] || isNaN(a) || isNaN(b)) {
        return NaN
    } 
    return this.results[operation](a, b);
  };

  this.addMethod = function (operation, func) {
    this.results[operation] = func;
  };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
powerCalc.addMethod("++", (a, b) => a + b + b);

let result = powerCalc.calculate("2 ++ 3");
console.log(result);
