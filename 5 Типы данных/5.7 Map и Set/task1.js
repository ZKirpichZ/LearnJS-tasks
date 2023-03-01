function unique(arr) {
  onlyOne = new Set(arr);
  return Array.from(onlyOne);
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));
