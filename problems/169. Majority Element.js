/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

let output = majorityElement([2, 2, 1, 1, 1, 2, 2]);
// output = majorityElement([1]);
console.log(output);
