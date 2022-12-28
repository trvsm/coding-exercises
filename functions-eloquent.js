/*
Chapter 3: Functions
-Parameter: a value assignment, but the value to assign is given by caller
-JavaScript assigns undefined to unspecified parameters, and ignores extras.  Can write functions with conditions to handle undefined params
-Return: a control flow keyword: jumps out of current function & passes return value to caller

-Start with something that is correct and easy to understand
-Recursion useful for solving when exploring several 'branches'

-A useful principle is to not add cleverness unless your sure you're going to need it.

*/

// Can treat functions as values; assign a specific function call and return the local binding:
const multiplier = (factor) => {
  // return a function that takes a number as param, multiplies by factor
  return (number) => number * factor;
};

const twice = multiplier(2);

// Recursion: a function can call itself, so long as it doesn't do so to overflow the stack
const power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
};
// This is close to the mathematical implementation, but about 3X slower than loop; running through loop generally cheaper than multiple function calls

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}

/* Chapter 3 Exercises */
// Minimum: write a function that takes two arguments and returns minimum

const findMin = (num1, num2) => {
  if (num1 < num2) {
    return num1;
  } else return num2;
};

// Recursion: define a function to check evenness of N: 0 is even, 1 is odd, for any other number evenness is the same as N-2
// accpets single positive whole number, returns Boolean

const isEven = (num) => {
  let reduce = (current) => {
    if (Math.abs(current) > 1) {
      return reduce(current - 2);
    } else return current;
  };
  if (reduce(num) === 0) {
    return console.log(true);
  } else return console.log(false);
};

// Bean Counting: write a function countBs that takes a string as only argument and returns a number that indicates how many uppercase B are in the string
// next write a function called countChar that behaves like countBs, except takes argument that indicates the character to be counted

const countBs = (string) => {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === "B") {
      count++;
    }
  }
  return console.log(count);
};

const countChar = (string, character) => {
  let count = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === character) {
      count++;
    }
  }
  return console.log(count);
};
