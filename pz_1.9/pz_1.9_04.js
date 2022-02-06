// let result = prompt('Скільки поверхів ви хочете отримати?', [1]);
//
// let miss = 5 - result;
//
// for (let j = 0; j < miss; j++) {
//     document.write('<br/>');
// }
//
// let stars = 6 - result;
//
// for (let i = 0; i < result; i++) {
//
//     for (let j = 0; j < stars; j++) {
//         document.write('*');
//     }
//     document.write('<br/>');
//     stars++;
// }
let result = window.prompt('Скільки поверхів ви хочете отримати',[1]);

let stars = '';
for (let i = 0; i < result; i++) {
        stars += '*';
        console.log(stars);
}














