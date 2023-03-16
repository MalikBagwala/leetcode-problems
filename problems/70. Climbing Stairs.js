/**
 * @param {number} n
 * @return {number}
 */

// The trick behind the question lies in the fibonacci sequence.
// 1st iteration z=2 x=1 y=2 -> 2
// 2nd iteration z=3 x=2 y=3 -> 3
// 3rd iteration z=5 x=3 y=5 -> 5
// 4th iteration z=8 x=5 y=8 -> 8
// 5th iteration z=13 x=8 y=13 -> 13
var climbStairs = function (n) {
  if (n < 2) {
    return 1;
  }

  let x = 1; // first step
  let y = 1; // second step
  let z = 0; // total steps

  for (let i = 2; i <= n; i++) {
    z = x + y;
    x = y;
    y = z;
  }

  return z;
};

function fibonacci(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.time("climbStairs");
console.log(climbStairs(48));
console.timeEnd("climbStairs");

console.time("fibonacci");
console.log(fibonacci(48 + 2));
console.timeEnd("fibonacci");
