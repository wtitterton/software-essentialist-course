
interface ValidationError {
    type: string;
    message: string;
}

interface validationResult {
    isValid: boolean,
    errors: ValidationError[]
}

export const isValidPassword = (password: string): validationResult => {
    const hasAtleastOneDigit = /\d/;
    const hasAtleastOneUppercaseLetter = /(.*[A-Z].*)/;
    const maxLimit = 15
    const minLimit = 5;
    const errors: ValidationError[] = [];
    let isValid = true;

    if (password.length < minLimit || password.length > maxLimit) {
        isValid = false;
        errors.push({type: 'length', message: 'password must be less than 15 characters'});
    }

    if (!hasAtleastOneUppercaseLetter.test(password)) {
        isValid = false;
        errors.push({type: 'uppercase', message: 'password must contain at least one uppercase letter'});
    }

    if (!hasAtleastOneDigit.test(password)) {
        isValid = false;
         errors.push({type: 'digit', message: 'password must contain at least one digit.'});
    }
    
    return {
        isValid,
        errors
    }
}