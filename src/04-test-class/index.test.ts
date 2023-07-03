// Uncomment the code below and write your tests
import { getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const BankAccount = getBankAccount(5000);
    expect(BankAccount.getBalance()).toBe(5000);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const BankAccount = getBankAccount(5000);
    expect(() => BankAccount.withdraw(7000)).toThrow(
      `Insufficient funds: cannot withdraw more than ${5000}`,
    );
  });

  test('should throw error when transferring more than balance', () => {
    const BankAccount1 = getBankAccount(5000);
    const BankAccount2 = getBankAccount(5000);
    expect(() => BankAccount1.transfer(7000, BankAccount2)).toThrow(
      `Insufficient funds: cannot withdraw more than ${5000}`,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const BankAccount = getBankAccount(5000);
    expect(() => BankAccount.transfer(2000, BankAccount)).toThrow(
      'Transfer failed',
    );
  });

  test('should deposit money', () => {
    const BankAccount = getBankAccount(5000);
    BankAccount.deposit(3000);
    expect(BankAccount.getBalance()).toBe(8000);
  });

  test('should withdraw money', () => {
    const BankAccount = getBankAccount(5000);
    BankAccount.withdraw(3000);
    expect(BankAccount.getBalance()).toBe(2000);
  });

  test('should transfer money', () => {
    const BankAccount1 = getBankAccount(5000);
    const BankAccount2 = getBankAccount(5000);
    BankAccount1.transfer(3000, BankAccount2);
    expect(BankAccount2.getBalance()).toBe(8000);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
