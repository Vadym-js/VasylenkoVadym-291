let result = window.prompt('Скільки поверхів ви хочете отримати',[1]);
let stars = '';
for (let i = 0; i < result; i++) {
        stars += '*';
        console.log(stars);
}
console.log('\n');

function pyramid(n) {
        for(let i=1; i<= n; i++){
                let str = ' '.repeat(n-i);
                let str2 = '*'. repeat(i*2 -1);
                console.log(str + str2 + str);
        }
}
pyramid(result);
console.log('\n');
function diamond(n) {
        let height = 7;
        let empty = "";
        let rStars = "";
        let halfHeight = Math.ceil(height / 2);
        for (let i = 0; i < halfHeight; i++) {
                empty = "";
                rStars = "";
                for (let j = 0; j < halfHeight - i; j++) {
                        empty += " ";
                }
                for (let j = 0; j < 2 * i + 1; j++) {
                        rStars += "*";
                }
                console.log(empty + rStars);
        }

        for (let i = halfHeight - 1; i > 0; i--) {
                rStars = "";
                empty = "";

                for (let j = 0; j < halfHeight - i + 1; j++) {
                        empty += " ";
                }
                for (let j = 0; j < 2 * i - 1; j++) {
                        rStars += "*";
                }

                console.log(empty + rStars);
        }
}
diamond(result);








