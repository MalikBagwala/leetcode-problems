/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  return Math.abs(Math.floor(Math.sqrt(x)));
};

let output = mySqrt(4);
output = mySqrt(8);
console.log(output);
