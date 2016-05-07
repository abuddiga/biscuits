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
  // keep track of largest sum possible at each index, return sum at final index
  var sums = [];
  var max = -Infinity;

  for (var i = 0; i < array.length; i++) {
    var prevSum = sums[i-1] || 0;
    sums[i] = Math.max(prevSum + array[i], array[i]);
    max = Math.max(max, sums[i]);
  }
  
  return max;
};

module.exports = largestContiguousSum;
