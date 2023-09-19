// polyfill for Number.isInteger(num)
const isNumber = num => {
    return (
        typeof num == "number" && // *** typeof NaN == "number" ***
        !isNaN(num)
    )
}

/**
 * Sums all numbers in range [from ~ upTo]
 * @param {number} from 
 * @param {number} upTo 
 */
const sumAll = function(from, upTo) {
    if(
        from < 0 || upTo < 0 ||
        !isNumber(from) || !isNumber(upTo) // !Number.isInteger(from) || !isNumber(upTo)
    )
        return 'ERROR'

    // allow calls like: sumAll(123, 1)
    if(from > upTo) {
        const tmp = from
        from = upTo
        upTo = tmp
    }

    let sum = 0
    
    let crnt = from
    while(crnt <= upTo) {
        sum += crnt++
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
