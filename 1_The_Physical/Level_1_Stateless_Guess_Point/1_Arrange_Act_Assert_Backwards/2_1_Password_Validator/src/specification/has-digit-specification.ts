import { Specification } from "./specification";
import { ValidationError } from "..";

export class HasDigitSpecification extends Specification<string> { 
    isSatisfied(candidate: string): Boolean {
        const hasAtleastOneDigit = /\d/;
        return hasAtleastOneDigit.test(candidate);
    }

    error(): ValidationError {
        return {type:'digit', message: "password must contain at least one digit."}
    }
}