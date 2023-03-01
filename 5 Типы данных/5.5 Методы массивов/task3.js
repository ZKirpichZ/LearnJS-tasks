
/* function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (a > arr[i] || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
} */

// быстрым перебором (как указано в лекции)

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);


function filterRangeInPlace(arr, a, b) {
  arr.forEach((el, index) => {
    if (a > el || el > b) {
      arr.splice(index, 1)
    }
  })
}

// НЕ знаю что быстрее, проверять в лом было:D, пока что учим основы
