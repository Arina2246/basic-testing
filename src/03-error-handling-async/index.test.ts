// Uncomment the code below and write your tests
import {
  throwError,
  // throwCustomError,
  resolveValue,
  // MyAwesomeError,
  // rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const result = await resolveValue(5);
    expect(result).toBe(5);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => {
      throwError('message');
    }).toThrow('message');
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => {
      throwError();
    }).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    // expect(() => {
    //   throwCustomError();
    // }).toThrow();
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    // expect(() => {
    //   rejectCustomError();
    // }).toThrow(Error);
  });
});
