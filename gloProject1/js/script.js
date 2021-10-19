'use strict'

const title = document.getElementsByTagName('h1')[0],
    calculate = document.getElementsByClassName('handler_btn')[0],
    reset = document.getElementsByClassName('handler_btn')[1],
    screenBtn = document.querySelector('.screen-btn'),
    otherItemsPercents = document.querySelectorAll('.other-items.percent'),
    otherItemsNumbers = document.querySelectorAll('.other-items.number'),
    rollback = document.querySelector('.rollback input[type=range]'),
    rollbackInputRange = document.querySelector('.rollback  input[type="range"]'),
    rollbackRangeValue = document.querySelector('.rollback .range-value'),
    total = document.getElementsByClassName('total-input')[0],
    totalCount = document.getElementsByClassName('total-input')[1],
    totalCountOther = document.getElementsByClassName('total-input')[2],
    fullTotalCount = document.getElementsByClassName('total-input')[3],
    totalCountRollBack = document.getElementsByClassName('total-input')[4];
let screens = document.querySelectorAll('.screen');
    

const appData = {
    title: '',
    screens: [],
    screenCount: 0,
    screenPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    fullPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicePercentPrice: 0,
    rollback: 0,
    concatPrices: () => {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price; 
            appData.screenCount += screen.count;
        }
        for (let key in appData.servicesNumber) 
            appData.servicePricesNumber += +appData.servicesNumber[key];

        for (let key in appData.servicesPercent)
             appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key]/100);

        appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback/100)));
    },
    showResult: () => {
        total.value = appData.screenPrice;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
        totalCountRollBack.value = appData.servicePercentPrice;
        totalCount.value = appData.screenCount;
    },
    addTitle: () => document.title = title.textContent,
    addScreens: () => {
        screens = document.querySelectorAll('.screen'); 
        screens.forEach((screen, index) => {
            const select = document.querySelector('select');
            const input = document.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            });
        });
    },
    addServices: () => {
        otherItemsNumbers.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            if (check.checked) appData.servicesNumber[label.textContent] = input.value;
        });
        otherItemsPercents.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            if (check.checked) appData.servicesPercent[label.textContent] = input.value;
        });
        console.log(appData);
    },
    addScreenBlock: () => { 
        const cloneScreens = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreens);
        
    },
    getRollback: () => {
        appData.rollback = rollback.value;
        rollbackRangeValue.textContent = `${rollback.value}%`;
    },
    checkScreensPrice: () => {
        for (let key in appData.screens){
            if (appData.screens[key].price == 0) {
                console.log('false');
                return false;
            }
        }
        console.log('true');
        return true;
    },
    start: () => {
        appData.addServices();
        appData.concatPrices();
        appData.showResult();
    },
    init: () => {
        appData.addTitle();
        calculate.addEventListener('click', () => {
            appData.addScreens();
            appData.checkScreensPrice();
            if (!appData.checkScreensPrice()) {
                alert('заполните поля');
            appData.screens = [];
            appData.screenPrice = 0;
                return appData.checkScreensPrice();
            }
            appData.start();
        });
        rollback.addEventListener('input', appData.getRollback);
        screenBtn.addEventListener('click', appData.addScreenBlock);
    }
};

appData.init();

