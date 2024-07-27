/*
 * Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) {
        return x
    }

    let low = 0
    let high = x
    let middle = -1

    while (low <= high) {
        middle = Math.floor(low + (high - low) / 2)

        if (middle * middle > x) {
            high = middle - 1
        } else if (middle * middle < x) {
            low = middle + 1
        } else {
            return middle
        }
    }

    return Math.round(high)
}
