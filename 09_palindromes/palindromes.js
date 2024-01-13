/**
 * helper
 * @param {string} ch charcter to test
 * @returns TRUE if the character should be processed
 */
function isValidChar(ch) {
  return (ch>='a' && ch<='z') || (ch>='A' && ch<='Z') || (ch>='0' && ch<='9')
}

/**
 * @param {string} str string to test
 * @returns TRUE if 'str' is a palindrome
 */
const isPalindrome = function (str) {
  // ptrs
  let l = 0
  let r = str.length - 1
  
  while(l < r) {
    const lChar = str[l]
    if(!isValidChar(lChar)) {
      ++l
      continue
    }
    
    const rChar = str[r]
    if(!isValidChar(rChar)) {
      --r
      continue
    }

    if(lChar.toLowerCase() !== rChar.toLowerCase()) return false

    ++l
    --r
  }

  return true
}

// Do not edit below this line
module.exports = isPalindrome
