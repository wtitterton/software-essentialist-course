export const isPalindrome = (input: string): boolean => {
  return reverse(formatString(input)) === formatString(input)
}

const reverse = (input: string): string => {
    return input.split('').reverse().join('');
}

const formatString = (input: string): string => {
    return input.replace( /\s/g, '').toLocaleLowerCase();
}
