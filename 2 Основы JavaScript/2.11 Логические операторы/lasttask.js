let loginUser = prompt("Кто там?", "");

if (loginUser == "Админ") {
  let password = prompt("Пароль?", "");

  if (password === "Я главный") {
    alert("Здравствуйте!");
  } else if (password === null) {
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (loginUser === null) {
  alert("Отменено");
} else {
  alert("Я вас не знаю");
}
