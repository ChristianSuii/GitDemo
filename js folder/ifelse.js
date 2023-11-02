// const age = 25
// const child = age <= 6;
// const senior = age >= 65;
// isHoliday = true;

// if ((age <= child || age >= 65) && isHoliday) {
//   console.log('Discount');
// } else {
//   console.log('No Discount');
// }
const randNum = Math.random();
let result = '';
let guess = 'Heads';
(randNum > 0.5) ? result = 'Heads' : result = 'Tails'

guess === result ? console.log('You win!') : console.log('You lose!')


