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