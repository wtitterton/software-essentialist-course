import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
    it("should return a string", () => {
        expect(typeof fizzBuzz(1)).toBe("string");
    });

    it("should return '1' when given 1", () => {
        expect(fizzBuzz(1)).toBe("1");
    })
    
    it("should return 'Fizz' when given 3", () => {    
        expect(fizzBuzz(3)).toBe("Fizz");
    });

    it("should return 'Buzz' when given 5", () => {    
        expect(fizzBuzz(5)).toBe("Buzz");
    });

});
