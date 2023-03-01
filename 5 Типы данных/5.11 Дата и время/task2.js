let date = new Date(2012, 0, 8);  // 3 января 2012 года
console.log( getWeekDay(date) );  // нужно вывести "ВТ"

function getWeekDay(date) {
    week = ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ']
    return week[date.getDay()]
}