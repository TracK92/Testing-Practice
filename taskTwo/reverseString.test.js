const reverseString = require('./reverseString');

test('should return a reversed string', () => {
    expect(reverseString('trace')).toBe('ecart');
});
