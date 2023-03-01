function getSecondsToTomorrow() {
  day = new Date();
  let sec = (day.getHours() * 60 + day.getMinutes()) * 60 + day.getSeconds();
  let total = 86400;
  return total - sec;
}

console.log(getSecondsToTomorrow())