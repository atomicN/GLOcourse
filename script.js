"use strict"


const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    service: '',
    service2: '',
    fullPrice: 0,
    allServicePrices: 0,
    servicePercentPrice: 0,
    rollback: 20,
    questionnaire: () => {
        appData.title = prompt('what`s your project`s name?').trim();
        appData.screens = prompt('what kind of screens do you want?',`"simple","hard","interactive"`);
    
        do {appData.screenPrice = prompt("how much would you like to pay for it?","please enter only numbers");}
        while(!isNumber(appData.screenPrice));
    
        appData.adaptive = confirm("do you need an adaptive site?");
    },
    getAllServicePrices: () => {
        let total = 0;
        let servicePrice;
        for (let i = 0; i < 2; i++){
            if (i === 0)  appData.service = prompt('what kind of extra service do you want?');
            else if(i === 1) appData.service2 = prompt('what kind of extra service do you want?');
            do {servicePrice = prompt('how much will it cost?');}
            while (!isNumber(servicePrice));
            total += +servicePrice;
            servicePrice = 0;
        }
        return total;
    },
    getFullPrice: () => +appData.screenPrice + appData.allServicePrices,
    getServicePercentPrices: () => Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback/100))),
    logger: function (variable){ console.log(`${variable}: `, typeof variable); },
    start: () => {
        appData.questionnaire();
        appData.title = capitalizeTitle(appData.title);
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        getRollBackMessage(appData.fullPrice);
        appData.logger(appData.title);
        appData.logger(appData.screenPrice);
        appData.logger(appData.adaptive);
        appData.logger(appData.servicePercentPrice);
        for (let key in appData) appData.logger(key);
    }
};


function isNumber(num){ return !isNaN(parseFloat(num)) && isFinite(num); }

function capitalizeTitle(name){ return name[0].toUpperCase() + name.slice(1,).toLowerCase(); }

const getRollBackMessage = price =>{
    if (price > 30000 || price == 30000) console.log("you got a 10% discount");
    if (price > 15000 && price < 30000 || price == 15000) console.log("you got a 5% discount");
    if (price > 0 && price < 15000) console.log("a discount is not provided");
    if (price < 0)  console.log("something went wrong");
};


appData.start();

