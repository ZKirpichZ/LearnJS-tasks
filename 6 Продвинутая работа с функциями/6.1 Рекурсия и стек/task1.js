// Цикл
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(100));

// Рекурсия
function sumToRecursion(n) {
  return n == 1 ? 1 : n + sumToRecursion(n - 1);
}

console.log(sumToRecursion(100));

// Формула
function sumToFormula(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumToFormula(100));
