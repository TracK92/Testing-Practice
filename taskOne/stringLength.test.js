const charsLength = require('./stringLength');

test('should have four characters', () => {
    expect(charsLength("abba")).toBe(4);
})

test('chars > 1', () => {
    expect(charsLength("")).toBeUndefined();
})

test('chars < 10', () => {
    expect(charsLength("abcdefghijklmnopqrst")).toBeUndefined();
})

