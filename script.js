
const game = () => {
    const number = Math.floor(Math.random() * 100);
    console.log(number);


    let attempts = 10;
    alert(`welcome to "guess the number" game, u have to find the hidden number in ${attempts} attempts`);
    let user = 0;


    let guess = () => {
        
        if (attempts == 0 ) {
            alert(`you lost!`);
            
            return;
        }
        user = prompt('enter your number');
        if (isNaN(user)){ 
            alert('enter numbers');
            user = prompt('enter your number');
        }
        if (user === null) {
            alert('game is ended');
            return;
        }
        if (user < number) {
            alert(`the number is bigger, now you have ${attempts - 1} attempts`);
            attempts--;
            guess();
        }
        if (user > number) {
            alert(`the number is less, now you have ${attempts - 1} attempts`);
            attempts--;
            guess();
        }
        if (user == number) {
            alert(`you won! the number was "${ number}"`);
            return;
        }    
    };
    
    guess();
};

const restart = () => {
    game();
    const askToRestart = confirm("do u wanna play again?");
    if (askToRestart) restart();
    return;
};
restart();
alert('wish u all the best!');

