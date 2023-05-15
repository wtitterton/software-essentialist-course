export const fizzBuzz = (number: Number): string  => 
{
  if (number === 3) {
    return "Fizz";
  }  

  if (number === 5) {
    return "Buzz";
  }  

  return number.toString();
}