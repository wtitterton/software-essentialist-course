import { HasDigitSpecification } from "./specification/has-digit-specification";
import { HasUppercaseSpecification } from "./specification/has-uppercase-specification";
import { LengthSpecification } from "./specification/length-specification";
import { EverySpecification } from "./specification/specification";

export interface ValidationError {
    type: string;
    message: string;
}

export interface ValidationResult {
    isValid: boolean,
    errors: ValidationError[]
}

export const isValidPassword = (password: string): ValidationResult => {
    return new EverySpecification([
        new LengthSpecification(password, 5, 15),
        new HasUppercaseSpecification(password),
        new HasDigitSpecification(password)
    ]).isSatisfied(password);
}
