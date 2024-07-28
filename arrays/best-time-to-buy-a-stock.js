/*
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let left = 0
    let right = 1
    let maxProfit = 0

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left])
        } else {
            left = right
        }
        right++
    }

    return maxProfit
}

const runCases = function () {
    const testCases = [
        { prices: [1, 2], expected: 1 },
        { prices: [2, 4, 1], expected: 2 },
        { prices: [7, 6, 4, 3, 1], expected: 0 },
        { prices: [7, 1, 5, 3, 6, 4], expected: 5 },
    ]

    for (let i = 0; i < testCases.length; i++) {
        const result = maxProfit(testCases[i].prices)
        if (maxProfit(testCases[i].prices) !== testCases[i].expected) {
            throw Error(`Case ${i + 1} was not passed: expected ${testCases[i].expected}, got ${result}`)
        }
    }

    console.log("Passed")
    return true
}

runCases()
