const isPalindrome = require('./palindromes')

describe('isPalindrome', () => {
  test('works with a single word with odd letters number', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });
  test('works with a single word with even letters number', () => {
    expect(isPalindrome('raccar')).toBe(true);
  });
  test('skips punctuation', () => {
    expect(isPalindrome('rac,ecar!')).toBe(true);
  });
  test('is case-insensitive', () => {
    expect(isPalindrome('Racecar!')).toBe(true);
  });
  test('accepts multiple words with punctuation', () => {
    expect(isPalindrome('A car, a man, a maraca.')).toBe(true);
  });
  test('accepts multiple words', () => {
    expect(isPalindrome('Animal loots foliated detail of stool lamina.')).toBe(true);
  });
  test('doesn\'t just always return true', () => {
    expect(isPalindrome('ZZZZ car, a man, a maracaz.')).toBe(false);
  });
  test('accepts numbers in a string', () => {
    expect(isPalindrome('rac3e3car')).toBe(true);
  });
  test('works with unevenly spaced numbers in a string', () => {
    expect(isPalindrome('r3ace3car')).toBe(false);
  });
});
