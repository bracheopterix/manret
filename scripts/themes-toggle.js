let page = document.querySelector('.page');
let themeSwitch = document.getElementsByClassName('color-themes-switch')[0];

themeSwitch.onclick = function() {
    page.classList.toggle('color');
    page.classList.toggle('bw');
}









// let page = document.querySelector('.page ');
// //let themeSwitch = document.querySelector('.color-themes-switch');
// let themeSwitches = document.getElementsByClassName('color-themes-switch');
// console.log(themeSwitches);

// for (let element of themeSwitches) {
//     element.onclick = function() {
//         for (let eachElement of themeSwitches) {
//             eachElement.classList.toggle('red');
//         }
//     }
// }




// for (let element of themeSwitches) {
//     element.onclick = function() {
//         element.classList.toggle('red');
//     }
// }