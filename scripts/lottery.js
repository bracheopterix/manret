let ticketNumber = document.getElementById('ticket-number');
let lotteryNumber = document.getElementById('lottery-number');
let lotteryButton = document.getElementById('lottery-button');
let historyBox = document.getElementById('lottery-history');
let myStorage = window.localStorage;
let counter;
console.log("myStorage length = ", myStorage.length);
console.log("ticketNumber = ", ticketNumber);
console.log("lotteryNumber = ", lotteryNumber);
console.log("lotteryButton = ", lotteryButton);
console.log("HistoryBox = ", historyBox);

let randomNumber = 0;
if (myStorage.length === 0) {
    counter = 0;
} else {
    counter = parseInt(myStorage.getItem('counter'));
    ticketNumber.textContent = counter + 1;
}

lotteryButton.onclick = function() {
    // Это механизм расчета номера билета и выигрышного номера
    //Вывожу что у меня сейчас записано по умолчанию в качестве выигрышного номера (должно быть 000)
    console.log(lotteryNumber.textContent);
    //Получаю случайное число с плавающей запятой (от 0 до 1) и умножаю, чтобы было 6 цифр перед запятой
    randomNumber = getRandomInt(100000, 1000000);
    // Превращаю предыдущее число в целое и записываю в содержимое элемента lotteryNumber
    lotteryNumber.textContent = randomNumber.toFixed();
    //Добавляю единицу за этот билет к номеру проданных билетов
    counter += 1;
    //Элемент номера билетов получает значением номер последнего проданного билета
    ticketNumber.textContent = counter;
    // Это механизм записи пары номер-номер в историю
    //создаю html-элемент (тег)
    let newCommentNumber = document.createElement("dt");
    //запихиваю в него номер билета
    newCommentNumber.textContent = counter;


    let newCommentData = document.createElement("dd");
    newCommentData.textContent = randomNumber.toFixed();
    // добавляю ребенком в конец бокса с историей лотереи
    historyBox.append(newCommentNumber);
    historyBox.append(newCommentData);
    localStorage.setItem('counter', counter.toString());
    //localStorage.removeItem('counter');

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

// function addNewElement () {
// let newCommentNumber = document.addNewElement("p");
// newCommentNumber.textContent = counter;
// document.append(newCommentNumber HistoryBox);
// }