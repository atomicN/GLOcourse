const num = 266219;
let temp = num.toString().split("");
let result = 1;
for (let i of temp) {
    i = +i;
    result *= i;
    
}
result **= 3;
console.log(result.toString().substr(0,2));
