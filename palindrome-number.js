/* Given an integer, return true if x is a palindrome, otherwise false.
input: number (integer), output: boolean
*/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  let xString = x.toString();
  let res;
  for (let index = 0; index < xString.length; index++) {
    if (xString[index] === xString[xString.length - (index+1)]) {
      res = true;
    } else {
      res = false;
      return res;
    }
  }
  return res;
};

let test = 1;
let test2 = 12;
let test3 = 1000021;
console.log(isPalindrome(test));
console.log(isPalindrome(test2));
console.log(isPalindrome(test3));
