import { isPalindrome } from './index';

describe('palindrome checker', () => {
    it("should return true when given 'mom'", () => {
        expect(isPalindrome('mom')).toBe(true)
    })

    it("should return false when given 'Momx'", () => {
        expect(isPalindrome('Momx')).toBe(false)
    })
})