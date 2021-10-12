let weekday = document.querySelector('.weekday');
let today = new Date();
let week = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

for (let day in week) {
    if (today.getDay() == +day + 1){
        weekday.insertAdjacentHTML("beforebegin",`<div class="today">${week[day]}</div>`);
    }
    else if (day == 5 || day == 6) { weekday.insertAdjacentHTML("beforebegin",`<div class="weekend">${week[day]}</div>`);}
    else { weekday.insertAdjacentHTML("beforebegin",`<div class="">${week[day]}</div>`);}
}
