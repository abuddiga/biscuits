/////////////////////////////////////////////////////////////
// LARGEST CONTIGUOUS SUM
// -----------------------------------------
// What is the largest contiguous (row of numbers) sum of an array of digits?
//
// EX:
// [1, 2, 3] => 6
// [1, 2,-2, 3] => 4
// [1, 2,-4, 1, 2, 3] => 6
//
/////////////////////////////////////////////////////////////

var largestContiguousSum = function (array) {
  // keep track of largest sum possible at each index, update max
  var max = -Infinity;
  var prevSum = 0;
  var currSum;

  array.forEach(function(value) {
    currSum = Math.max(prevSum + value, value);
    max = Math.max(max, currSum);
    prevSum = currSum;
  })

  return max;
};

module.exports = largestContiguousSum;
