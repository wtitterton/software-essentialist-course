
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

    if (!hasAtleastOneUppercaseLetter.test(password)) {
         return {
        isValid: false,
        errors: [ 
            {
                type: 'uppercase',
                message: 'password must contain at least one uppercase letter'
            }
        ]
        }
    }

    if (!hasAtleastOneDigit.test(password)) {
         return {
        isValid: false,
        errors: [ 
            {
                type: 'digit',
                message: 'password must contain at least one digit.'
            }
         ]
        }
    }
    
    
    return {
        isValid: false,
        errors: [ 
            {
                type: 'uppercase',
                message: 'password must contain at least one uppercase letter'
            }
        ]
    }
}