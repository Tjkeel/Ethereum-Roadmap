import { describe, it, expect } from 'vitest';
import { zip } from './utils.js';

describe('zip', () => {
  it('Should zip two arrays and return a matrix of that values', () => {
    const first = [1, 2, 3];
    const second = [4, 5, 6, 7];

    const zipped = zip(first, second);

    expect(zipped).toStrictEqual([[1, 4], [2, 5], [3, 6]]);
  });
});
