import { Specification } from "./specification";
import { ValidationError } from "..";

export class HasUppercaseSpecification extends Specification<string> { 
    isSatisfied(candidate: string): Boolean {
       const hasAtleastOneUppercaseLetter = /(.*[A-Z].*)/;
       return hasAtleastOneUppercaseLetter.test(candidate);
    }

    error(): ValidationError {
        return {type:'uppercase', message: "password must contain at least one uppercase letter"}
    }
}