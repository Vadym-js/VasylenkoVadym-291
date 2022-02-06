let numb = 10000;
let counter = 0;
let result = 0;
while(numb > 50 ){
    numb /= 2;
    counter++;
    if ( numb < 50) {
        result = numb;
    }
}
console.log("Кількість ітерацій - " + counter);
console.log("Результат ділення - " + result);






