import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
    it("should return a string", () => {
        expect(typeof fizzBuzz(1)).toBe("string");
    });

    it("should return '1' when given 1", () => {
        expect(fizzBuzz(1)).toBe("1");
    }) 

});
