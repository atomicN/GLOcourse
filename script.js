// 1
const arr = ['234','123','321','421','341','412','214'];
for (let i in arr){
    if (arr[i].startsWith('2') || arr[i].startsWith('4')){
        console.log(arr[i]);
    }
}

// 2
for (let i = 2; i <= 100; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(`${i} divisors - 1:${i}`);
    }
}