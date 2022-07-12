const MyCalc = require('./calculator');

describe('additions', () => {
    test('is adding', () => {
        expect(MyCalc.add(22, 31)).toBe(53);
    });
    test('is adding', () => {
        expect(MyCalc.add(12, 2)).toBe(14);
    });
    test('is adding', () => {
        expect(MyCalc.add(1, 10)).toBe(11);
    });
});

describe('subtractions', () => {
    it('is subtracting', () => {
        expect(MyCalc.subtract(22, 31)).toBe(-9);
    });
    it('is subtracting', () => {
        expect(MyCalc.subtract(12, 2)).toBe(10);
    });
    it('is subtracting', () => {
        expect(MyCalc.subtract(1, 10)).toBe(-9);
    });
});

describe('divisions', () => {
    it('is dividing', () => {
        expect(MyCalc.divide(22, 2)).toBe(11);
    });
    it('is dividing', () => {
        expect(MyCalc.divide(12, 4)).toBe(3);
    });
    it('is dividing', () => {
        expect(MyCalc.divide(100, 10)).toBe(10);
    });
});

describe('multiplications', () => {
    test('is multiplying', () => {
        expect(MyCalc.multiply(22, 31)).toBe(682);
    });
    test('is multiplying', () => {
        expect(MyCalc.multiply(12, 2)).toBe(24);
    });
    test('is multiplying', () => {
        expect(MyCalc.multiply(1, 10)).toBe(10);
    });
});

