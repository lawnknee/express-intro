const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route

  const nums = strNums.map(function(str) {
    if (isNaN(Number(str))) {
      throw new BadRequestError(`${str} is not a number`);
    } else {
      return Number(str);
    }
  });

  return nums;

}

module.exports = { convertStrNums };