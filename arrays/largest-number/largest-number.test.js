const largestNumber = require('./largest-number')

test("nums: [10, 2], expected: '210'", () => {
    expect(largestNumber([10, 2])).toBe('210')
})
test("nums: [3, 30, 34, 5, 9], expected: '210'", () => {
    expect(largestNumber([3, 30, 34, 5, 9])).toBe('9534330')
})
