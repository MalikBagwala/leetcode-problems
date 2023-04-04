/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let largestIndex = 0;
  let secondLargestIndex = 1;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element > nums[largestIndex]) {
      largestIndex = i;
    } else if (element > nums[secondLargestIndex]) {
      secondLargestIndex = i;
    }
  }

  console.log(nums[largestIndex], nums[secondLargestIndex]);
  return nums[largestIndex] >= nums[secondLargestIndex] * 2 ? largestIndex : -1;
};

// let output = dominantIndex([3, 6, 1, 0]);
let output = dominantIndex([1, 2, 3, 4]);
output = console.log(output);
