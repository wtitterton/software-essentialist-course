import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
    it("should return 'Fizz' when given number devisable by 3", () => {    
        expect(fizzBuzz(3)).toBe("Fizz");
        expect(fizzBuzz(9)).toBe("Fizz");
        expect(fizzBuzz(42)).toBe("Fizz");
    });

    it("should return 'Buzz' when given number devisable by 5", () => {    
        expect(fizzBuzz(5)).toBe("Buzz");
        expect(fizzBuzz(10)).toBe("Buzz");
    });

    it("should return 'FizzBuzz' when number devisable by 3 and 5", () => {    
        expect(fizzBuzz(15)).toBe("FizzBuzz");
        expect(fizzBuzz(45)).toBe("FizzBuzz");
    });

    it("should return a number as a string", () => {    
        expect(fizzBuzz(43)).toBe("43");
        expect(fizzBuzz(8)).toBe("8");
        expect(fizzBuzz(58)).toBe("58");
    });

    it("should throw an error when given a number that is not between 1 and 100", () => {
        const message = "Number must be between 1 and 100";
        
        expect(() => {fizzBuzz(-12)}).toThrow(message);
        expect(() => {fizzBuzz(102)}).toThrow(message);
    });
});
