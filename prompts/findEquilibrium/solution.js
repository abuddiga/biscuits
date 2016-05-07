/////////////////////////////////////////////////////////////
// Find Equilibrium Index
// ---------------------------
// Given an array, find the index where the sum of the left half equals
// the sum of the right half.
//
// Linear Time Linear Space
//
/////////////////////////////////////////////////////////////

var findEquilibriumIndex = function (array) {
  var leftSums = [];

  for (var i = 0; i < array.length; i++) {
    var prevSum = leftSums[i-1] || 0;
    leftSums[i] = prevSum + array[i];
  }

  for (var j = 0; j < array.length; j++) {
    if (leftSums[j] === leftSums[leftSums.length-1] - leftSums[j]) {
      return j;
    }
  }

  return -1;
};

module.exports = findEquilibriumIndex;
