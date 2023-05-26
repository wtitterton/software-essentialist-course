

import { isValidPassword } from './index';

describe('password validator', () => {

   test.each([
      ['maxwell1_c', [{"type": "uppercase", "message": "password must contain at least one uppercase letter"}]],
      ['maxwellTheBe', [{"type": "digit", "message": "password must contain at least one digit."}]],
      ['thePhysical1234567', [{"type": "length", "message": "password must be less than 15 characters"}]]
    ])('knows that %s is an invalid password and return a response of %o', (password: string, errors) => {
        const result = isValidPassword(password);
        expect(result.isValid).not.toBeTruthy();
        expect(result.errors).toEqual(errors)
    });

  it("should return multiple errors for 'invalidPasswords'", () => {
    const result = isValidPassword("invalidPasswords");
    expect(result.isValid).not.toBeTruthy();
    expect(result.errors.length).toBe(2)
    expect(result.errors).toEqual(
      [
        {"message": "password must be less than 15 characters", "type": "length"}, 
        {"message": "password must contain at least one digit.", "type": "digit"}
      ]
    )
  })
})


