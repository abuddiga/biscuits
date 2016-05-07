var expect = require('chai').expect;
var largestContiguousSum = require('../prompts/largestContiguousSum/solution.js');
var arrayTwo = [1, 2, 3]; // => 6
var arrayThree = [1, 2,-2, 3]; // => 4
var arrayFour = [1, 2,-4, 1, 2, 3]; // => 6

describe('largestContiguousSum', function (done) {
  it('should find the largest contiguous sum', function (done) {
    expect(largestContiguousSum(arrayTwo)).to.equal(6);
    expect(largestContiguousSum(arrayThree)).to.equal(4);
    expect(largestContiguousSum(arrayFour)).to.equal(6);
    done();
  });
});
