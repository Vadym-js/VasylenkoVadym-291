
let num = 0;
do {
    if (num === 0)
        console.log(num,"- це нуль");
    if(num % 2 === 0 && num !== 0 )
        console.log(num, "-  парне число");
    if(num % 2 !== 0)
        console.log(num, "- не парне число");
    num++;
}while (num <= 20);

