
// Проверочка на потерю точности
console.log((1.35).toFixed(1)); 
console.log((1.35).toFixed(20)); 

console.log((6.35).toFixed(1));
console.log((6.35).toFixed(20));

console.log((6.35 * 10).toFixed(20));

// результатик
console.log((6.35 * 10).toFixed(1) / 10);
