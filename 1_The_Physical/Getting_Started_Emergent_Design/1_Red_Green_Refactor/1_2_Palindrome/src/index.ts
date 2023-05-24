export const isPalindrome = (input: string): boolean => {
    const reversed = input.split('').reverse().join('').toLocaleLowerCase();
    return reversed === input.toLocaleLowerCase();
}