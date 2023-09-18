/**
 * @param {any[]} arr 
 * @param  {...any} args 
 */
const removeFromArray = function(arr, ...args) {
    if(arr.length < 1) return arr; // speed up. unneeded.

    for(let arg of args) {
        for(let i=0; i<arr.length; ++i) {
            if(arr[i] === arg)  arr.splice(i, 1)
        }
    }

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
