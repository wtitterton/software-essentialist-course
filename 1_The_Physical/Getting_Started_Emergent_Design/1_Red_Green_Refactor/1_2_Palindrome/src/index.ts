export const isPalindrome = (input: string): boolean => {
    const reversed = input.replace( /\s/g, '').split('').reverse().join('').toLocaleLowerCase();
    return reversed === input.replace( /\s/g, '').toLocaleLowerCase();
}
