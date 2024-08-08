/* 
* You are given an m x n integer matrix matrix with the following two properties:

* Each row is sorted in non-decreasing order.
* The first integer of each row is greater than the last integer of the previous row.
* Given an integer target, return true if target is in matrix or false otherwise.

* You must write a solution in O(log(m * n)) time complexity.
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length
    const n = matrix[0].length
    let low = 0
    let high = m * n - 1

    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2)
        const val = matrix[Math.floor(mid / n)][mid % n]

        if (val === target) {
            return true
        } else if (val < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return false
}

const runCases = function () {
    const testCases = [
        {
            matrix: [
                [1, 3, 5, 7],
                [10, 11, 16, 20],
                [23, 30, 34, 60],
            ],
            target: 3,
            expected: true,
        },
        {
            matrix: [
                [1, 3, 5, 7],
                [10, 11, 16, 20],
                [23, 30, 34, 60],
            ],
            target: 13,
            expected: false,
        },
    ]

    for (let i = 0; i < testCases.length; i++) {
        const result = searchMatrix(testCases[i].matrix, testCases[i].target)
        if (result !== testCases[i].expected) {
            throw Error(`Case ${i + 1} was not passed: expected ${testCases[i].expected}, got ${result}`)
        }
    }

    console.log("Passed")
    return true
}

runCases()
