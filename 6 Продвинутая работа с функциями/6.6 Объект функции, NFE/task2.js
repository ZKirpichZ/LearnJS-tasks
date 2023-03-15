const sum = (a) => {
  let result = a;

  function func(b) {
    result += b;
    return func;
  }

  func.toString = () => result;

  return func;
};

console.log(sum(1)(2).toString());
console.log(sum(5)(-1)(2).toString());
console.log(sum(6)(-1)(-2)(-3).toString());
console.log(sum(0)(1)(2)(3)(4)(5).toString());
