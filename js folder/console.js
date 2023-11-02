console.log("I'm learning Javascript");
console.log('Hello \n Hey Bitches');
console.log(`Hello Megan`);
console.log(`Items(${1+1}): $${2894/100}`);
console.log(`Estimated tax(${1000/100}%): $${(2894/100)*10/100}`);

console.log('My name is:');
console.log('Christian');
console.log('My name is:'+ ' Christian');

console.log(Math.round(23.4));

console.log(`$${((10*1)+(8*3)+(5*1))*3}`);
console.log(`$${(1850/100)+((750/100)*2)}`);
console.log(`$${(1850/100+((750/100)*2))*10/100}`);
console.log(`$${(1850/100+((750/100)*2))*20/100}`);
console.log(Math.floor(2.8));//Rounded down using Math.floor()
console.log(Math.ceil(2.2));//Always round number up no matter the value e.g 2.2 to 3

function celToFah(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit; 
}

let celsiusTemp = 25;
let fahrenheitTemp = celToFah(celsiusTemp);
console.log(fahrenheitTemp);

console.log(((-5*9)/5)+32);
console.log(((86-32)*5)/9);
console.log(`Total cost: $${5+3}`);
console.log(`Total cost: $${(599+295)/100}\nThank you,come again`);
alert(`Total cost: $${(599+295)/100}\nThank you,come again`);
console.log(`Items(${2+2}):             $${5788/100}\nShipping & handling:  $${998/100}\nTotal before tax:     $${6786/100}\nEstimated tax(${1000/100}%):   $${679/100}\nOrder total:          $${7465/100}`);
console.log('Welcome!');
















