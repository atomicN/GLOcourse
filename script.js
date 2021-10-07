"use strict"


let title ,
    screens,
    screenPrice,
    adaptive,
    service,
    service2,
    fullPrice,
    allServicePrices,
    servicePercentPrice,
    rollback = 20;


const isNumber = num =>!isNaN(parseFloat(num)) && isFinite(num);

const questionnaire = () => {
    title = prompt('what`s your project`s name?').trim();
    screens = prompt('what kind of screens do you want?',`"simple","hard","interactive"`);

    do {screenPrice = prompt("how much would you like to pay for it?","please enter only numbers");}
    while(!isNumber(screenPrice));

    adaptive = confirm("do you need an adaptive site?");
};

const getAllServicePrices = () => {
    let total = 0;
    let servicePrice;
    for (let i = 0; i < 2; i++){
        if (i === 0)  service = prompt('what kind of extra service do you want?');
        else if(i === 1) service2 = prompt('what kind of extra service do you want?');
        do {servicePrice = prompt('how much will it cost?');}
        while (!isNumber(servicePrice));
        total += +servicePrice;
        servicePrice = 0;
    }
    return total;
};

const getFullPrice = () => +screenPrice + allServicePrices;

const getServicePercentPrices = () => Math.ceil(fullPrice - (fullPrice * (rollback/100)));

const getRollBackMessage = price =>{
    if (price > 30000 || price == 30000) console.log("you got a 10% discount");
    if (price > 15000 && price < 30000 || price == 15000) console.log("you got a 5% discount");
    if (price > 0 && price < 15000) console.log("a discount is not provided");
    if (price < 0)  console.log("something went wrong");
};

const getTitle = name => name[0].toUpperCase() + name.slice(1,).toLowerCase();

const showTypeOf = variable => console.log(`${variable}: `, typeof variable);



questionnaire();
title = getTitle(title);
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
getRollBackMessage(fullPrice);
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);


screens.trim().includes(',') ? console.log(screens.trim().split(',')) : console.log(screens.trim().split(' '));
console.log(servicePercentPrice);
