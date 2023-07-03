// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 1, b: 2, action: Action.Subtract, expected: -1 },
  { a: 1, b: 2, action: Action.Multiply, expected: 2 },
  { a: 4, b: 2, action: Action.Divide, expected: 2 },
  { a: 1, b: 2, action: Action.Exponentiate, expected: 1 },
  { a: 4, b: 2, action: 'invalid action', expected: null },
  { a: 'aa', b: 'bb', action: Action.Exponentiate, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)('table test', ({ a, b, action, expected }) => {
    expect(simpleCalculator({ a, b, action })).toEqual(expected);
  });
});
