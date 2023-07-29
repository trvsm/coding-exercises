/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let consecOnes = 0;
  let current = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) {
      current = 0;
    }
    if (nums[i] === 1) {
      ++current;
    }
    if (nums[i] === 1 && current > consecOnes) {
      consecOnes = current;
    }
  }
  return consecOnes;
};
