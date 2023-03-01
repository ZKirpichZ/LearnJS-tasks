let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let read = new WeakSet();

for (let i of messages) {
  read.has(i) ? console.log("прочитанно") : console.log("нет");
}

for (let i of messages) {
  read.add(i);
  read.has(i) ? console.log("прочитанно") : console.log("нет");
}


//weak set лучше использовать если требуется узнать прочитано сообщение или нет
