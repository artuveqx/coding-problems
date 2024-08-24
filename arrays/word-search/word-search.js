/* 
* Given an `m*n` grid of characters `board` and a string `word`, return true if
* `word` exists in the grid.

* The word can be constructed from letters of sequentially adjacent cells, where
* adjacent cells are horizontally or vertically neighboring. The same letter cell 
* may not be used more than once.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = (board, word) => {
    const backtrack = (i, j, k) => {
        if (k === word.length) {
            return true
        }
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] != word[k]) {
            return false
        }

        const temp = board[i][j]
        board[i][j] = ''

        if (
            backtrack(i + 1, j, k + 1) ||
            backtrack(i - 1, j, k + 1) ||
            backtrack(i, j + 1, k + 1) ||
            backtrack(i, j - 1, k + 1)
        ) {
            return true
        }

        board[i][j] = temp
        return false
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (backtrack(i, j, 0)) {
                return true
            }
        }
    }

    return false
}
module.exports = exist
