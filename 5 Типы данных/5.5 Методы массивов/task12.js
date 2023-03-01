function unique(arr) {
  let result = [];

  for (let el of arr) {
    if (!result.includes(el)) {
      result.push(el);
    }
  }

  return result;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings));
