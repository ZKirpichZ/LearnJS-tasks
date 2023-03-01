let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

function aclean(arr) {
  dict = new Map();
  for (let word of arr) {
    let onlyAnagram = word.split("").sort().join("");
    dict.set(onlyAnagram, word);
    console.log(dict);
  }
  return Array.from(dict.values());
}
