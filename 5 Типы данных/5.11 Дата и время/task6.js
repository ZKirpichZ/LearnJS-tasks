function getSecondsToday() {
    // let day = new Date(2023,1,23,10);
    let day = new Date();
    return day.getHours() * 3600 + day.getMinutes() * 60 + day.getSeconds();
  }

console.log(getSecondsToday())