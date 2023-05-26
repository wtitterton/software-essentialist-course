
interface ValidationError {
    type: string;
    message: string;
}

interface validationResult {
    isValid: boolean,
    errors: ValidationError[]
}

export const isValidPassword = (password: string): validationResult => {
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