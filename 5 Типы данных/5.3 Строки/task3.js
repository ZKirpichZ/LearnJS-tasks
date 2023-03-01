function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.substring(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}

function truncate2(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));
