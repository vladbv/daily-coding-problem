const totalNQueens = require('./script.js')


test('Returning the number of possible arrangements properly?', () => {
expect(totalNQueens(10)).toBe(724)
});
