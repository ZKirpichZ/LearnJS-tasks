let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(fn) {
  return (a, b) => (a[fn] > b[fn] ? 1 : -1);
}

users.sort(byField('name'));
console.log(users)

users.sort(byField('age'));
console.log(users)