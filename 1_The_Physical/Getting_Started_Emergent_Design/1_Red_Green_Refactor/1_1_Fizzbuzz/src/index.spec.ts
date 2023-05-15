import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
    it("should return 'Fizz' when given 3", () => {    
        expect(fizzBuzz(3)).toBe("Fizz");
    });

    it("should return 'Buzz' when given 5", () => {    
        expect(fizzBuzz(5)).toBe("Buzz");
    });

    it("should return 'FizzBuzz' when given 15", () => {    
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });

    it("should return 'Fizz' when given 9", () => {    
        expect(fizzBuzz(9)).toBe("Fizz");
    });

    it("should return '43' when given 43", () => {    
        expect(fizzBuzz(43)).toBe("43");
    });

});
