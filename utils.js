const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route

  // const nums = strNums.map(str => Number(str));
  
  // for (let num of nums) {
  //   if (isNaN(num)) {
  //     throw new BadRequestError(`not a number`);
  //   }
  // }
  // return nums;

  const nums = strNums.map(function(str) {
    if (isNaN(str)) {
      throw new BadRequestError(`${str} not a number`);
    } else {
      strNums[str] = Number(str);
    }
  });

  return nums;

  // if (!nums.every(num => (typeof num === "number" && num !== NaN))) {
  //   return "not nums";
  // } else {
  //   // throw new BadRequestError();
  //   console.log(nums)
  //   return nums;
  // }
}

module.exports = { convertStrNums };