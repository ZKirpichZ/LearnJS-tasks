let user = {
  name: "Василий Иванович",
  age: 35,
};

let ref = JSON.stringify(user);
let test = JSON.parse(ref);
console.log(ref);
console.log(test);
