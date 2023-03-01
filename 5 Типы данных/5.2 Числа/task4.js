/* let i = 0;
 while (i != 10) {
   i += 0.2;
} */


let num = 0;
let gg = 0.2.toFixed(20);

console.log('Это ' + gg)

while (num < 10){
    num += +gg;
    console.log(num);
}

//отсюда выясняем что, число-то не будет равнятся десяти (вот и загвоздочка)