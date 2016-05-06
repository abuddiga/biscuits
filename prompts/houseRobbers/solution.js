var houseRobbers = function (houses) {
  var maxes = [];

  for (var i = 0; i < houses.length; i++) {
    var prevMax = maxes[i-1] || 0;
    var prevPrevMax = maxes[i-2] || 0;

    maxes[i] = Math.max(prevMax, prevPrevMax+houses[i]);
  }
  return maxes[maxes.length-1];
};


module.exports = houseRobbers;