function isNumber(num) {
  return (
    num.constructor === Number &&
    isNaN(num) == false // NOTE!!!   typeof NaN === 'number'
  )
}

// add
const add = function(numA, numB) {
  if(!isNumber(numA) || !isNumber(numB))  throw new Error('invalid argument')
  //
	return numA + numB
};

// subtract
const subtract = function(numA, numB) {
  if(!isNumber(numA) || !isNumber(numB))  throw new Error('invalid argument')
  //
	return numA - numB
};

// sum
/** @param arr {number[]} */
const sum = function(arr) {
	return arr.reduce((acc, num) => acc + num, 0)
};

// multiply
/** @param arr {number[]} */
const multiply = function(arr) {
  if(arr.length < 1) return 0
  //
  return arr.reduce((acc, num) => acc * num, 1)
};

// power
//
// helper
function positivePower(num, powerGreaterThanZero) {
  return num ** powerGreaterThanZero
}
//
/**
 * @param num {number}
 * @param pow {number}
*/
const power = function(num, pow) {
  if(pow === 0) return 1
  //
  if(pow > 0) return positivePower(num, pow)
  //
  // pow < 0:   num / (num ** (-pow + 1)) // oO/
  // OR
	return 1 / positivePower(num, -pow) // (8)^-2 == 1/(8^2)
};

// factorial
/** @param num {number} */
const factorial = function(num) {
  if(num < 0)  throw new Error('invalid argument')
	// if(num === 0) return 1 // 0! = 1   (covered by code below)
  //
  let ret = 1
  for(let i=2; i<=num; ++i)   ret *= i
  return ret
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
