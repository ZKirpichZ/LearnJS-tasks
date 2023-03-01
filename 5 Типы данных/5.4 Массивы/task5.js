function getMaxSubSum(arr) {
  let maximum = 0;
  let temp = 0;
  for (let el of arr) {
    temp += el;
    maximum = Math.max(maximum, temp);
    if (temp < 0) temp = 0;
  }

  return maximum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));
