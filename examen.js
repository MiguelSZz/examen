

// a. 3 variables de tipo String
let name1 = 'Diego';
let name2 = 'Juanita';
let name3 = 'Pedro';

// b. 3 Variables of tipo number
let age1 = 30;
let age2 = 25;
let age3 = 35;

// c. 3 variables tipo boolean
let isStudent1 = true;
let isStudent2 = false;
let isStudent3 = true;

// d. 1 constante
const PI = 3.14;

// e. Declare 3 arrays
let names = ['Diego', 'Juanita', 'Pedro'];
let ages = [30, 25, 35];
let isStudents = [true, false, true];

// Use console.log para imprimir el contenido de al menos una de cada tipo de variables. 
console.log('Name:', name1);
console.log('Age:', age1);
console.log('Is Student:', isStudent1);
console.log('PI:', PI);
console.log('Names:', names);
console.log('Ages:', ages);
console.log('Is Students:', isStudents);

//Usando operadores aritméticos, la función prompt y el ciclo switch y el ciclo while...

let num1, num2, operation, result, keepRunning = true;

while (keepRunning) {
  num1 = parseFloat(prompt("Enter the first number:"));
  num2 = parseFloat(prompt("Enter the second number:"));

  operation = prompt("Choose an operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide");

  switch (operation) {
    case "1":
      result = num1 + num2;
      break;
    case "2":
      result = num1 - num2;
      break;
    case "3":
      result = num1 * num2;
      break;
    case "4":
      result = num1 / num2;
      break;
    default:
      console.log("Invalid operation.");
      continue;
  }

  console.log("Result: " + result);

  keepRunning = confirm("Do you want to continue?");
}