let ticketNumber = document.getElementById('ticket-number');
let lotteryNumber = document.getElementById('lottery-number');
let lotteryButton = document.getElementById('lottery-button');
console.log(ticketNumber);
console.log(lotteryNumber);
console.log(lotteryButton);

let randomNumber = 0;
let counter = 0;

// Это механизм расчета номера билета и выигрышного номера

lotteryButton.onclick = function () {
  console.log(lotteryNumber.textContent);
  randomNumber = getRandom(randomNumber);
  let integer = randomNumber*1000000;
  lotteryNumber.textContent = integer.toFixed();
  counter = counter++;
  ticketNumber.textContent = counter;
}

function getRandom() {
  return Math.random();
}

// Это механизм записи пары номер-номер в историю

