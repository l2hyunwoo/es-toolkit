import { describe, expect, it } from 'vitest';
import { sum } from './sum';

describe('sum function', () => {
  it('calculates the sum of an array of numbers', () => {
    const result = sum([1, 2, 3, 4]);
    expect(result).toBe(10);
  });

  it('returns 0 for an empty array', () => {
    const result = sum([]);
    expect(result).toBe(0);
  });

  it('handles arrays with negative numbers', () => {
    const result = sum([-1, -2, -3, 4]);
    expect(result).toBe(-2);
  });

  it('ensures that adding the sums of two arrays equals the sum of their concatenation.', () => {
    const array1: number[] = [];
    const array2 = [1, 2, 3, 4];

    expect(sum(array1) + sum(array2)).toBe(sum([...array1, ...array2]));
  });
});
