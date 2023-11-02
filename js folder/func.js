// function newFunc() {
//   console.log('fuck you');
// }
// newFunc();

// newFunc();

// function calcTax(cost, taxRate = 0.05) {
//   console.log(cost * taxRate)
// }

// calcTax(2000000, 0.15)
// calcTax(16000000)

// function greet(name) {
//   (!name) ? console.log('Hi there') : console.log(`Hello! ${name}`)
// }
// greet('Tobi');

function convertToFahrenheit(celsius) {
  return ((celsius * 9 / 5) + 32)
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9
}

function convertTemp(degrees, unit) {
  if (unit === 'C') {
      let result = convertToFahrenheit(degrees);
      return `${result} F`;
    } else if (unit === 'F') {
      let result = convertToCelsius(degrees);
      return `${result} C`
    }
  }
  console.log(convertTemp(25, 'C'))
  console.log(convertTemp(86, 'F'))



