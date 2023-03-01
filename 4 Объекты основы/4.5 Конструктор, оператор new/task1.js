result = {};

function A() {
  return result;
}
function B() {
  return result;
}

console.log(new A() == new B());

let a = new A();
let b = new B();

console.log(a == b);
