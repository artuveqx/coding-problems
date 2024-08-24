const exist = require('./word-search')

test('word: "ABCCED", expected output: true', () => {
    expect(
        exist(
            [
                ['A', 'B', 'C', 'E'],
                ['S', 'F', 'C', 'S'],
                ['A', 'D', 'E', 'E'],
            ],
            'ABCCED'
        )
    ).toBe(true)
})
test('word: "SEE", expected output: true', () => {
    expect(
        exist(
            [
                ['A', 'B', 'C', 'E'],
                ['S', 'F', 'C', 'S'],
                ['A', 'D', 'E', 'E'],
            ],
            'SEE'
        )
    ).toBe(true)
})
test('word: "ABCB", expected output: false', () => {
    expect(
        exist(
            [
                ['A', 'B', 'C', 'E'],
                ['S', 'F', 'C', 'S'],
                ['A', 'D', 'E', 'E'],
            ],
            'ABCB'
        )
    ).toBe(false)
})
