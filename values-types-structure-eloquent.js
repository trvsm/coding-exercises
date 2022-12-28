/* Chapter 1: Values, Types, Operators
"Keeping programs under control is the main problem of programming." (managing complexity)
Notes: 
-Maybe I can be using the while loop more effectively
-A good program might be a list of functions that reads close to a plain english expression
-can use unary - to change sign
-using || operator for defaults (evaluated condition || fallback/default)
-ternary operator (truthy condition ? 1 : 2) evaluates to middle on true (falsy ? 1 : 2) evaluates to 2, right hand
-Coercion: arithmetic operators on things that don't map to a number result in NaN, may result in NaN further downstream
-Type comparison with == : if you want to check if a var has a real value instead of null or undefined can compare to null
- if comparing to false use === strict equality to avoid errors with falsy values like 0 and " "

Chapter 2: Program Structure
Expression: produces a value.  Statement: at least an expression followed by a semicolon. When in doubt include the semicolon.
-Number.isNaN function returns true if the given argument is NaN
-{} groups any number of statements  into a single statement (block)
-do loop: similar to while, but always executes body at least once, starts testing to continue after first execution (the test appears after body of loop)
-break statement immediately ends the enclosing loop
-continue similar to break; when encountered control flow jumps out of loop, continues with next iteration
*/

// the do loop executes body at least once, then checks to continue with the test that follows
let yourName;
// do {
//   yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);

// break statement useful besides switch:
for (let current = 20; ; current++) {
  if (current % 7 === 0) {
    console.log(current);
    break;
  }
}
// this loop finds the first number greater than 20 divisible by 7.  The while condition is empty; without a break condition it would continue infinitely

// switch (prompt("What is the weather like?")) {
//   case "rainy":
//     console.log("Remember to bring an umbrella.");
//     break;
//   case "sunny":
//     console.log("Dress lightly.");
//   case "cloudy":
//     console.log("Go outside.");
//     break;
//   default:
//     console.log("Unknown weather type!");
//     break;
// }
// this switch statement takes advantage of omitting break after case "sunny" to share the "go outside" message.  Be caresful; it is easy to forget a break, executing unwanted code

/* Chapter 2 exercises */
// Looping a triangle: write a loop that makes 7 console.logs to output a triangle
const triangle = (lineHeight) => {
  let drawOutput = "";
  while (drawOutput.length < lineHeight) {
    drawOutput += "^";
    console.log(drawOutput);
  }
  return `Enjoy your ${lineHeight} line triangle`;
};
triangle(7);

// FizzBuzz
const fizzBuzz = () => {
  for (let index = 1; index <= 100; index++) {
    if (!(index % 3) && !(index % 5)) {
      console.log("FizzBuzz");
    } else if (!(index % 3)) {
      console.log("Fizz");
    } else if (!(index % 5)) {
      ("Buzz");
    } else console.log(index);
  }
};
fizzBuzz();

// Chessboard: write a program that creates a string representing an 8x8 gird, with newline character to separate lines
// modify so program woks with any size to output a grid of given width and height

const chessLine = (characters, start = "") => {
  let line = start;
  while (line.length < characters) {
    if (line[line.length - 1] === "#") {
      line += ` `;
    } else {
      line += "#";
    }
  }
  if (line.length === characters) {
    line += "\n";
  }
  return line;
};
// chessLine will output one line with desired number of characters ending with new line.  Optional start parameter

const chessboard = (size) => {
  // loop to create lines <size> number of times
  let boardString = "";
  for (let index = 0; index < size; index++) {
    if (boardString[boardString.length - 2] === " ") {
      boardString += chessLine(size, " ");
    } else {
      boardString += chessLine(size);
    }
  }
  console.log(boardString);
};
// bug here for handling odd length strings
