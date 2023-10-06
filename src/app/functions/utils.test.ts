import { toFixedNumber, toFixed } from './utils';

describe('toFixedNumber', () => {
  it('should return the correct number', () => {
    const num = 1.23456789;
    const digits = 3;
    const base = 10;
    const expected = 1.235;
    const result = toFixedNumber(num, digits, base);
    expect(result).toEqual(expected);
  });
});

describe('toFixed', () => {
  it('should return the correct number', () => {
    const num = 1.23456789;
    const digits = 3;
    const expected = 1.235;
    const result = toFixed(num, digits);
    expect(result).toEqual(expected);
  });
});