let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();

console.log(rabbit) // получается что rabbit
console.log(animal)
