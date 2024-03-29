/*
Chapter 5: Higher Order Functions
repeat something n times:
function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(i);
    }
}
Higher order functions allow us to abstract over actions, not just values
The goal is more logical code that breaks to small chunks, easy to understand

Cases: functions that create new functions:
function greatherThan(n){return m => m > n;} like a class of functions
let greatherThan10 = greaterThan(10);
console.log(greaterThan10(11)); -> true

functions that change other functions:
// ready noisy(func) like a binding; noisy(func) is one function, so noisy(func)(3,2,1) is one function call
function noisy(func){
    return(...args)=>{
        console.log('calling with', args);
        let result = f(...args);
        console.log('called with', args, 'returned', result);
        return result;
    };
}

consider higher order functions to create control flow:
function unless(test, then){
    if(!test) then();
}
eg repeat(3, n =>{
    unless(n % 2 === 1, ()=>{
        console.log(n, 'is even');
    });
});

Consider forEach like a for/of loop

Reduce:
function reduce(array, combine, start){
    let current = start;
    for (let element of array){
        current = combine(current, element);
    }
    return current;
}
c.log(reduce([1,2,3], (a, b)=>a+b, 0))

equivalent to standard method:
c.log([1,2,3].reduce((a,b)=>a+b));

Higher order & composed operations:
function average(array){
    return array.reduce((a,b)=>a+b)/array.length;
}
c.log(Math.round(average(SCRIPTS.filter(script=>script.living).map(script=>script.year))))
// filter returns an array of objects that match a criteria, map converts to a flat number array that average can work on
*/

// find which script a character code comes from, if any
function characterScript(code) {
    for (let script of SCRIPTS) { //for all script properties of SCRIPTS object (array in this case)
      if (script.ranges.some(([from, to]) => { //ranges is a property on each srcipt. some returns a boolean
        return code >= from && code < to; //some returns true if target code is >= from & smaller than to (if true that target code is in range)
      })) {
        return script;
      }
    }
    return null;
  }

//   pitfalls of two character UTF-16
  // Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)

// for/of loop also solves this:
for(let char of horseShoe){
    console.log(char);
}

// findIndex & indexOf return -1 when an element not found

/* Exercises */
//Flattening: use reduce & concat to flatten array of arrays to a single array with all elements
// input: array with some elements as arrays
// output: array, with all elements

//come back to this.  I think the intent is similar to linked list; set up a loop checking each element, within each element build up the array

//Your Own Loop: write a function <loop> that provides something like a for loop:
// take value, test, update, and body.  Each iteration runs test on value, stops if false.  calls body, finally calls update, then restarts

const myLoop = (value, testFn, bodyFn, updateFn) =>{
    let current = value;
   while(testFn(current)){
           bodyFn(current);
        current = updateFn(current);
        
    }
}

//Everything: arrays have an 'every' method analogous to 'some' method.
//Implement every as a function that takes an array and a test as parameters.  Write two, one using a loop, one using some.

const everyLoop = (array, test)=> {
    //recall: <for...in> for string props of objects
    let result = true;
    for(let element of array){
        if (!test(element)){result = false; return result;}
    }
    return result}

const everySome = (array, test) =>{
    let result = true;
//could create single item arrays and test via some
//some returns true when it finds one truthy. could go recursive: call some, if true take off first element, call some on remaining

}

// Dominant Writing Direction: Write a function that computes dominant writing direction in string of text
//consider characterScript & countBy from earlier in the chapter

const dominantDirection=(textStr)=>{

}

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }

  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }