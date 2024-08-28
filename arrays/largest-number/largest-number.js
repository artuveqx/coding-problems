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

module.exports = largestNumber
