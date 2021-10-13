"use strict"


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    services: {},
    fullPrice: 0,
    allServicePrices: 0,
    servicePercentPrice: 0,
    rollback: 20,
    questionnaire: () => {
        do {appData.title = prompt('what`s your project`s name?').trim();}
        while(isNumber(appData.title) || appData.title.length == 0);

        for (let i = 0; i < 2; i++){
            let name;
            do {name = prompt('what kind of screens do you want?').trim();}
            while(isNumber(name) || name.length == 0);
            let price = 0;
            
            do {price = prompt("how much would you like to pay for it?","please enter only numbers");}
            while(!isNumber(price));

            appData.screens.push({id: i, name: name, price: price});
        }

        for (let i = 0; i < 2; i++){
            let name;
            do {name = prompt('what kind of extra service do u want?').trim();}
            while(isNumber(name) || name.length == 0);
            let servicePrice = 0;
            
            do {servicePrice = prompt('how much will it cost?');}
            while (!isNumber(servicePrice));

            appData.services[name + (i + 1)] = +servicePrice;
        }
    
        appData.adaptive = confirm("do you need an adaptive site?");
    },
    concatPrices: () => {
        for (let screen of appData.screens) { appData.screenPrice += +screen.price; }
        for (let key in appData.services) appData.allServicePrices += +appData.services[key];
    },
    getFullPrice: () => appData.fullPrice = +appData.screenPrice + appData.allServicePrices,
    getServicePercentPrices: () => appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback/100))),
    logger: () => {
        console.log(appData.title);
        console.log(appData.screenPrice);
        console.log(appData.adaptive);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
        console.log(appData.services);
    },
    start: () => {
        appData.questionnaire();
        appData.capitalizeTitle();
        appData.concatPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getRollBackMessage(appData.fullPrice);
        appData.logger();
    },
    getRollBackMessage: price =>{
        if (price > 30000 || price == 30000) console.log("you got a 10% discount");
        if (price > 15000 && price < 30000 || price == 15000) console.log("you got a 5% discount");
        if (price > 0 && price < 15000) console.log("a discount is not provided");
        if (price < 0)  console.log("something went wrong");
    },
    capitalizeTitle: () => appData.title = appData.title[0].toUpperCase() + appData.title.slice(1,).toLowerCase()
};


function isNumber(num){ return !isNaN(parseFloat(num)) && isFinite(num); }




appData.start();

