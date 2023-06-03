import { ValidationError, ValidationResult } from "..";

export interface iSpecification<T> {
  isSatisfied(candidate: T): Boolean;
  error(): ValidationError;
}

export abstract class Specification<T> implements iSpecification<T> {
  protected specification: T;

  constructor(specification: T) {
    this.specification = specification;
  }

  abstract isSatisfied(candidate: T): Boolean;

  abstract error(): ValidationError;
}

export abstract class SpecificationGroup<T>  {
  protected specification: iSpecification<T>[];

  constructor(specification: iSpecification<T>[]) {
    this.specification = specification;
  }

  abstract isSatisfied(candidate: T): ValidationResult;
  
}

export class EverySpecification<T> extends SpecificationGroup<T> {
  isSatisfied(candidate: T): ValidationResult {
    const errors = this.specification.map((specification) => {
        if (specification.isSatisfied(candidate) === false) {
          return specification.error();
        }
      }).filter((error) => { if (error !== undefined) return error; }) as ValidationError[];
    
    return {
      isValid: this.specification.every((specification) => specification.isSatisfied(candidate)),
      errors: errors
    }
  }
}
