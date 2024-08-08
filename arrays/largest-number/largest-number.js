/*
 * Given a list of non-negative integers nums, arrange them such that they
 * form the largest number and return it.
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = (nums) => {
    if (nums.length === 1) return nums[0].toString()

    let strNums = nums.map((n) => n.toString())

    const compare = (n1, n2) => (n1 + n2 > n2 + n1 ? -1 : 1)
    strNums.sort(compare)

    if (strNums[0].charAt(0) === '0') return '0'

    return strNums.join('')
}

const runTests = function () {
    const testCases = [
        { nums: [10, 2], expected: '210' },
        { nums: [3, 30, 34, 5, 9], expected: '9534330' },
    ]

    for (let i = 0; i < testCases.length; i++) {
        const result = largestNumber(testCases[i].nums)
        if (result !== testCases[i].expected) {
            throw new Error(`Case ${i + 1} was not passed: expected ${testCases[i].expected}, got ${result}`)
        }
    }

    console.log('All test are passed!')
    return true
}

runTests()
