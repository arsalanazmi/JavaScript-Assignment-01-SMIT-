// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");

if (num1 > num2) {
  console.log(`The larger number between ${num1} & ${num2} is ${num1}`);
} else {
  console.log(`Thhe larger number between ${num1} & ${num2} is ${num2}`);
}

// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -

let number = prompt("Enter any number");

if (number >= 0) {
  alert("The sign is +");
} else {
  alert("The sign is -");
}

// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

let number1 = prompt("Enter number 1");
let number2 = prompt("Enter number 2");
let number3 = prompt("Enter number 3");
let number4 = prompt("Enter number 4");
let number5 = prompt("Enter number 5");

let largerNum = 0;

if (number1 > largerNum) {
  largerNum = number1;
}
if (number2 > largerNum) {
  largerNum = number2;
}
if (number3 > largerNum) {
  largerNum = number3;
}
if (number4 > largerNum) {
  largerNum = number4;
}
if (number5 > largerNum) {
  largerNum = number5;
}
console.log(`The largest number is ${largerNum}`);

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------

for (let num = 0; num <= 15; num++) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A

let marks = +prompt("Enter your marks");
if (marks < 0 || marks > 100) {
  alert("Marks should be between 0 & 100");
}
if (marks < 60 && marks >= 0) {
  alert("F-Grade");
} else if (marks < 70 && marks >= 60) {
  alert("D-Grade");
} else if (marks < 80 && marks >= 70) {
  alert("C-Grade");
} else if (marks < 90 && marks >= 80) {
  alert("B-Grade");
} else if (marks <= 100 && marks >= 90) {
  alert("A-Grade");
}

// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz"

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
