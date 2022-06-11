const getBrackets = require('./script');

test('Are brackets balanced?', () => {
expect(getBrackets('([])[]({})')).toBe(true)
})
