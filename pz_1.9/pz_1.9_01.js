
function isPrime(num){
    let start = 2;
    const limit = Math.sqrt(num);
    while(start <= limit){
        if(num % start++ < 1){
            return false;
        }
    }
    return num;
}
for(let num = 2; num <= 100; num++){
    console.log(isPrime(num))
}


