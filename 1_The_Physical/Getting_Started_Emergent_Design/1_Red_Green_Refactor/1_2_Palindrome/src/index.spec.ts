import { isPalindrome } from './index';

describe('palindrome checker', () => {

    test.each([
    "mom",
    "Mom",
    "MoM",
    "xMomx",
    "Was It A Rat I Saw",
    "Never Odd or Even",
    "1Never Odd or Even1"
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