import { isPalindrome } from './index';

describe('palindrome checker', () => {

    test.each([
    "mom",
    "xMomx",
    "Was It A Rat I Saw",
    ])('returns true when given the word %s', (word: string) => {
        expect(isPalindrome(word)).toBe(true)
    });

    it("should return false when given 'Momx'", () => {
        expect(isPalindrome('Momx')).toBe(false)
    })

})