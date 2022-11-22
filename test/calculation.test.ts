import {describe, expect, test} from '@jest/globals';
import calc from "../src/components/atoms/Calculation";

describe('calc', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(calc(1, 2)).toBe(3);
  });
});