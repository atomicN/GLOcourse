'use strict'

const title = document.getElementsByTagName('h1')[0],
    calculateBtn = document.getElementsByClassName('handler_btn')[0],
    resetBtn = document.getElementsByClassName('handler_btn')[1],
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
    concatPrices: function(){
        for (let screen of this.screens) {
            this.screenPrice += +screen.price; 
            this.screenCount += screen.count;
        }
        for (let key in this.servicesNumber) 
        this.servicePricesNumber += +this.servicesNumber[key];

        for (let key in this.servicesPercent)
        this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key]/100);

        this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
        this.servicePercentPrice = Math.ceil(this.fullPrice - (this.fullPrice * (this.rollback/100)));
    },

    showResult: function(){
        total.value = this.screenPrice;
        totalCountOther.value = this.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = this.fullPrice;
        totalCountRollBack.value = this.servicePercentPrice;
        totalCount.value = this.screenCount;
    },

    addTitle: () => document.title = title.textContent,

    addScreens: function(){
        screens = document.querySelectorAll('.screen'); 
        screens.forEach((item, index) => {
            const select = document.querySelector('select');
            const input = item.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            });
        });
    },

    addServices: function(){
        otherItemsNumbers.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            if (check.checked) this.servicesNumber[label.textContent] = input.value;
        });
        otherItemsPercents.forEach(item => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            if (check.checked) this.servicesPercent[label.textContent] = input.value;
        });
        console.log(this);
    },
    
    addScreenBlock: function(){ 
        const cloneScreens =   screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreens);
        
    },

    getRollback: function(){
        this.rollback = rollback.value;
        rollbackRangeValue.textContent = `${rollback.value}%`;
    },

    checkScreensPrice: function(){
        for (let key in this.screens){
            if (this.screens[key].price == 0) {
                return false;
            }
        }
        return true;
    },

    start: function(){
        this.addServices();
        this.concatPrices();
        this.showResult();
    },

    reset: function(){
        location.reload();    
    },

    init: function(){
        this.addTitle();

        calculateBtn.addEventListener('click', () => {
            this.addScreens();
            this.checkScreensPrice();
            if (!this.checkScreensPrice()) {
                alert('заполните поля');
                this.screens = [];
            this.screenPrice = 0;
                return this.checkScreensPrice();
            }
            screens.forEach( item => {
                const select = item.querySelector('select');
                const input = item.querySelector('input');
                
                select.setAttribute('disabled', true);
                input.setAttribute('disabled', true);
            });

            const checkBoxes = document.querySelectorAll('input[type=checkbox]');
            checkBoxes.forEach( checkbox => checkbox.setAttribute('disabled', true));
            screenBtn.setAttribute('disabled', true);

            calculateBtn.style.display = "none";
            resetBtn.style.display = "inline-block";
            this.start();
        });
        resetBtn.addEventListener('click', this.reset);
        rollback.addEventListener('input', this.getRollback);
        screenBtn.addEventListener('click', this.addScreenBlock);
    }
};

appData.init();

