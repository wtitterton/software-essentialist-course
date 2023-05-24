import { isPalindrome } from './index';

describe('palindrome checker', () => {

    test.each([
    "mom",
    "xMomx",
    "Was It A Rat I Saw",
    ])('returns true when given the word %s', (word: string) => {
        expect(isPalindrome(word)).toBe(true)
    });

    test.each([
    "Momx",
    "Never Odd or Even1"
    ])('returns false when given the word %s', (word: string) => {
        expect(isPalindrome(word)).toBe(false)
    });

})