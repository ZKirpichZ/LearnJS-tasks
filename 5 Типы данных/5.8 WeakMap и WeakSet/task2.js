let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let read = new WeakMap();

read.set(messages[0], new Date());
console.log(read.get(messages[0]));
messages.shift();
console.log(read.get(messages[0]));

// weakmap   ключик и значение:D
