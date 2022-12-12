/* Given array of integers and integer target return indices of two numbers so they add to target 
assume exactly one solution and may not add current element to itself
input: array & integer
output: array, twi items, indeces from input array 
*/

const twoSum = (numArray, target) => {
  let output = [];
  numArray.forEach((element, index) => {
    for (let i = 0; i < numArray.length; i++) {
      if (index === i) {
        return;
      }
      if (element + numArray[i] === target) {
        output.push(i);
        output.push(index);
      }
    }
  });
  return output;
};

let testArr = [2, 7, 11, 15];
let testTar = 9;
console.log(twoSum(testArr, testTar));
