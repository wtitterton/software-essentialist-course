import { isPalindrome } from './index';

describe('palindrome checker', () => {
    it("should return true when given 'mom'", () => {
        expect(isPalindrome('mom')).toBe(true)
    })

    it("should return false when given 'Momx'", () => {
        expect(isPalindrome('Momx')).toBe(false)
    })

    it("should return true when given 'xMomx'", () => {
        expect(isPalindrome('xMomx')).toBe(true)
    })

    it("should return true when given 'Was It A Rat I Saw'", () => {
        expect(isPalindrome('Was It A Rat I Saw')).toBe(true)
    })
})