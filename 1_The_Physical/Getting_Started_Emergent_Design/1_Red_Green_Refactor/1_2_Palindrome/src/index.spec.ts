import { isPalindrome } from './index';

describe('palindrome checker', () => {
    it("should return true when given 'mom'", () => {
        expect(isPalindrome('mom')).toBe(true)
    })
})