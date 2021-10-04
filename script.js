"use strict"


let title = prompt('what`s your project`s name?'),
    screens = prompt('what kind of screens do you want?',`"simple","hard","interactive"`),
    screenPrice = prompt("how much will this work cost?"),
    rollback = 20,
    fullPrice,
    adaptive = confirm("do you need an adaptive site?");

let service = prompt("what kind of extra service would you like?"),
    servicePrice;
if (service) servicePrice = +prompt("how much would you like to pay for it?","please enter only numbers");

let    service2 = prompt("what kind of extra service would you like?"),
    servicePrice2;
if (service2) servicePrice2 = +prompt("how much would you like to pay for it?","please enter only numbers");

fullPrice = +screenPrice + servicePrice + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));

log(servicePercentPrice);

switch (fullPrice){
    case fullPrice > 30000 || fullPrice == 30000:
        log("you got a 10% discount");
        break;
    case fullPrice > 15000 && fullPrice < 30000 || fullPrice == 15000:
        log("you got a 5% discount");
        break;
    case fullPrice > 0 && fullPrice < 15000:
        log("a discount is not provided");
        break;
    case fullPrice < 0 :
        log("something went wrong");
}









function log(elem) {
    console.log(elem);
}