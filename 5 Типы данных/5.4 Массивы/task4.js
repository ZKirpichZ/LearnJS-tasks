function sumInput() {
  let input;
  let lst = [];
  let sum = 0;

  do {
    input = prompt("Жду числа:");
    lst.push(+input);
  } while (isFinite(input) && !(input === "" || input === null));

  for (let el of lst) {
    sum += el;
  }
  return sum;
}

alert(sumInput());
