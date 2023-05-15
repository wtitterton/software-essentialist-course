import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

    test.each([3,9,42])("should return 'Fizz' when given number devisable by 3", (number) => {
        expect(fizzBuzz(number)).toBe("Fizz");
    });

    test.each([5, 10])("should return 'Buzz' when given number devisable by 5", (number) => {
        expect(fizzBuzz(number)).toBe("Buzz");
    });

    test.each([15, 45])("should return 'FizzBuzz' when number devisable by 3 and 5", (number) => {
        expect(fizzBuzz(number)).toBe("FizzBuzz");
    });

    test.each([43, 8, 58])("should return a number as a string", (number) => {
        expect(typeof fizzBuzz(number)).toBe("string");
    });

    test.each([-12, 102])("should throw an error when given a number that is not between 1 and 100", (number) => {
        const message = "Number must be between 1 and 100";
        expect(() => {fizzBuzz(number)}).toThrow(message);
    });
});
