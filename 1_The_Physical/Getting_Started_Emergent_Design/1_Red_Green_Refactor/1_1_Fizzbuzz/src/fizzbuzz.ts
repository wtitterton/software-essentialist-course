export const fizzBuzz = (number: number): string  => 
{
    if (number > 100) { 
       throw new Error("Number must be less or equal to 100"); 
    }

    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } 

    if (number % 3 === 0) {
        return "Fizz";
    }  

    if (number % 5 === 0) {
        return "Buzz";
    }  

  return number.toString();
}