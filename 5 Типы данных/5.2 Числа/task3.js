function readNumber() {
    
  let input;

  do {
    input = +prompt("Жду число, а не буквы:");
  } while (!isFinite(input));

  if (input === null || input === "") return null;

  return +input;
}

alert(`Зачем тебе число ${readNumber()}`);
