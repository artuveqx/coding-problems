/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums.sort((a, b) => a - b)

    if (nums[0] !== 0) return 0

    if (nums[n - 1] !== n) return n

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] !== i) return i
    }
}
