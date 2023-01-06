/*
Chapter 4: Data Structures: Objects and Arrays

Square bracket notation: square brackets immediately following an expression with an expression inside looks up the element in left hand expression matching the index given by the expression in brackets
Dot notation: the word following dot is name of property to look up.  vs square brackets where the expression is evaluated, then converted to string
-Dot notation works only with properties that look like variable names, thus to access property "some property" use bracket notation: array["some property"]
Methods: a property that holds a function as its value
Objects: collections of properties.  curly braces at the start of statement commence block of statement, otherwise the describe an object

<in>: a binary operater. applied to string and object tells if that object has a property by that name
Object.assign: copies all properties from one object into another

<for-of> loop: works for arrays, strings, some others

Rest Parameters: for a function to accept any number of arguments.  rest parameter bound to an array with all further args.
-calling a function with an array of args spreads the array, passing element as separate arguments
-square bracket notation allows spread operator to spread an array into another eg: words = ['never', 'fully']; phrase = ['will', ...words, 'understand']

A List is a common data structure: nested set of objects, the first holding a reference to the seond, the second to the third, etc
-benefit of lists: shared parts of structure
*/

// rest parameter example
let max = (...numbers) => {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
};

// destructuring:
function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}
// is equivalent to
function phi([n00, n01, n10, n11]) {
  return (
    (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10))
  );
}
// square bracket destructuring lets us 'name' array elements

// similarly you can destructure from an object using braces:
let { age } = { name: "Faraji", age: 23 };
console.log(age);

/* Chapter 4 Exercises */
// Range: write a range function that takes two arguements (start and end), and returns an array containing all the numbers from start to end inclusive
const range = (start, end) => {
  let startToEnd = [];
  for (let index = start; index <= end; index++) {
    startToEnd.push(index);
  }
  console.log(startToEnd);
};

// Sum: Write a sum function that takes an array of numbers and returns the sum of these
const sum = (numbers) => {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return console.log(result);
};

// Reversing an Array: write a function to reverse as the array.reverse method, take an array as argument, produces new array with same elements
const reverseArray = (array) => {
  let reversed = [];
  for (let item of array) {
    reversed.unshift(item);
  }
  return console.log(reversed);
};

// write a function reverseArrayInPlace: modify the array given by reversing its elements, return the original
const reverseArrayInPlace = (array) => {
  let halfway = Math.floor(array.length / 2);
  let last = array.length - 1;
  for (let i = 0; i < halfway; i++) {
    let current = array[i];
    array[i] = array[last - i];
    array[last - i] = current;
  }
  return console.log(array);
};

// A List: write a function arrayToList that builds up a list structure
const arrayToList = (array) => {
  let list = {};
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
    // this works wile list.value = array[i] & list.rest = list is circular
  }
  return list;
};

// write a function listToArray that produces an array from a list
const listToArray = (list) => {
  let array = [];
  // loop through list.  Node is current element. Stay in loop while node is truthy; while rest is not null, set node to node.rest
  for (let node = list; node; node = node.rest) {
    if (node.value) {
      array.push(node.value);
    }
  }
  return console.log(array);
};

// Write a helper function prepend which takes an element and list and creates new list that adds the element
const prepend = (list, element) =>{
  let newList = {};
  newList.value = element;
  newList.rest = list;
  return newList;
}

// Write a helper function nth, which takes  list and number and returns the element at given position, 0 indexed
const nth = (list, itemIndex)=>{
let count = 0
let target
  for(let node = list; node; node = node.rest){
if(count === itemIndex){target = node; return target}
else{count++};
  }
  return undefined
}

// Write a recursive nth
const nthRecursive =(list, itemIndex)=>{
  for(let node = list;  itemIndex>= 0; node = list.rest){
    if(itemIndex>0){nthRecursive(node.rest, itemIndex-1)}

    if(itemIndex===0){return console.log(node)}
    else return undefined
  }
}
// this does return the right value, but continues executing...
console.log(nthRecursive(arrayToList([11,22,33]), 2));