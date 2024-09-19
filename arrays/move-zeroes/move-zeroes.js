/*
 * Given an array of integers, move zeros to the end while keeping the order of the rest. You should make the in-place change.
 */

/**
 * @param {Array<any>} list
 * @returns {void}
 */
function moveZeroes(list) {
    // 1. Iterate over the list, counting zeroes (k)
    // 2. Swap every zero with the next non-zero element
    // 3. Fill [len(list) - k; len(list)] with zeros
    // 4. Return the list

    let zeroes = 0
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 0) zeroes++
    }

    let swapPos = 0
    for (let j = 0; j < list.length; j++) {
        if (list[j] !== 0) {
            list[swapPos] = list[j]
            swapPos++
        }
    }

    for (let m = list.length - zeroes; m < list.length; m++) {
        list[m] = 0
    }

    return list
}

const list = [1, 0, 0, 2, 3]
moveZeroes(list)
console.log(list) // [1,2,3,0,0]
