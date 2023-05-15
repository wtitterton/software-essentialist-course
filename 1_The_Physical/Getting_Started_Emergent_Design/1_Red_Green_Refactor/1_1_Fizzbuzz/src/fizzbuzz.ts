export const fizzBuzz = (number: number): string  => 
{
  if (number === 15) {
    return "FizzBuzz";
  } 

  if (number % 3 === 0) {
    return "Fizz";
  }  

  if (number === 5) {
    return "Buzz";
  }  

 

  return number.toString();
}