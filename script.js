let title = "BigProject",
    screens = "Simple, Hard, Interactive",
    screenPrice = 2000,
    rollback = 20,
    fullPrice = 20000,
    adaptive = true;


    //lesson1
//alert('old flashbacks');

console.log('any text');


//lesson2
for (let i of [title, fullPrice, adaptive]) console.log(typeof i);

console.log(screens.length);

console.log(`the price of 1 screen is ${screenPrice} \n the full price is ${fullPrice}`);

screens = screens.toLowerCase().split();
console.log(screens);

console.log(`broker's payment is ${fullPrice * (rollback/100)}`);