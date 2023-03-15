function VideoGame(name, rating = 1) {
  this.name = name;
  this.rating = rating;
}
// VideoGame.prototype = {}; с этим game2 выведет undefuned
let game1 = new VideoGame("wither 3", 10);
let game2 = new game1.constructor("atomic heart");

console.log(game1);
console.log(game2);
console.log(game1.name);
console.log(game2.name);
