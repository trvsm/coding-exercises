/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  //loop through arr
  let evenDigits = 0;
  //can check length prop on a primitive if it's a string
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      evenDigits++;
    }
  }
  //filter.length
  return evenDigits;
};
