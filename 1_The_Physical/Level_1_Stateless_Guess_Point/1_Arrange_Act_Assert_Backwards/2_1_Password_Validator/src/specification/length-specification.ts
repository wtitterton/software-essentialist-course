import { ValidationError } from "..";
import { Specification } from "./specification";

export class LengthSpecification extends Specification<string> {
    constructor(input: string, private minLength: number, private maxLength: number) {
        super(input);
        this.minLength = minLength;
        this.maxLength = maxLength;
    }

    isSatisfied(candidate: string): Boolean {
        return candidate.length > this.minLength && candidate.length < this.maxLength
    }

    error(): ValidationError {
        return {type:'length', message: `password must be between ${this.minLength} and ${this.maxLength} characters`}
    }
}