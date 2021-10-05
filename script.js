"use strict"


let title = prompt('what`s your project`s name?').trim(),
    screens = prompt('what kind of screens do you want?',`"simple","hard","interactive"`),
    screenPrice = +prompt("how much will this work cost?","please enter only numbers"),
    adaptive = confirm("do you need an adaptive site?"),
    service = prompt("what kind of extra service would you like?"),
    service2 = prompt("what kind of second extra service would you like?");
let servicePrice,
    servicePrice2,
    fullPrice,
    allServicePrices,
    servicePercentPrice,
    rollback = 20;


function getServicePrice(serv){
    if (serv) {
        return +prompt(`how much would you like to pay for ${serv}?`,"please enter only numbers");
    }
}

const showTypeOf = variable => console.log(`${variable}: `, typeof variable);

const getAllServicePrices = (serv1, serv2) => serv1 + serv2;

function getFullPrice(){
    return screenPrice + allServicePrices;
}

function getTitle(name) {
    return name[0].toUpperCase() + name.slice(1,).toLowerCase();
}

function getServicePercentPrices() {
    return Math.ceil(fullPrice - (fullPrice * (rollback/100)));
}

function getRollBackMessage (price){
    if (price > 30000 || price == 30000) console.log("you got a 10% discount");
    if (price > 15000 && price < 30000 || price == 15000) console.log("you got a 5% discount");
    if (price > 0 && price < 15000) console.log("a discount is not provided");
    if (price < 0)  console.log("something went wrong");
}


title = getTitle(title);
servicePrice = getServicePrice(service);
servicePrice2 = getServicePrice(service2);
allServicePrices = getAllServicePrices(servicePrice, servicePrice2);
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
getRollBackMessage(fullPrice);
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);


screens.trim().includes(',') ? console.log(screens.trim().split(',')) : console.log(screens.trim().split(' '));
console.log(servicePercentPrice);
