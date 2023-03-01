let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  max = 0;
  nameWorker = null;
  for (let [key, value] of Object.entries(salaries)) {
    if (max < value) {
      max = value;
      nameWorker = key;
    }
  }
  return nameWorker
}

console.log(topSalary(salaries))
