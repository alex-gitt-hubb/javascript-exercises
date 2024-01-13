// fibonacci sequence:
// 0, 1,               1, 2, 3, 5, 8, 13, ..
// ^  ^                ^  ^  ^  ^  ^  ^
// defaults (0, 1)     calculated as: m[n-1] + m[n-2]

/**
 * calculate the num-th fibonacci member
 * @param {number|string} num 
 */
const fibonacci = function(num) {
  const n = +num
  if(n < 0) throw new Error("OOPS")

  let m0 = 0
  let m1 = 1

  for(let i=2; i<=n; i+=2) {
    m0 = m0 + m1
    m1 = m0 + m1
  }

  return n&1 ? m1 : m0
};

// Do not edit below this line
module.exports = fibonacci;
