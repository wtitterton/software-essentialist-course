

import { isValidPassword } from './index';

describe('password validator', () => {
  it('knows that that maxwell1_c is invalid as it does not contain uppercase letters', () => {
    const result = isValidPassword('maxwell1_c');
    expect(result.isValid).not.toBeTruthy();
    expect(result.errors).toEqual([{"message": "password must contain at least one uppercase letter", "type": "uppercase"}])
  });

  it('knows that "maxwellTheBe" is invalid because of a lack of digits', () => {
    const result = isValidPassword('maxwellTheBe');
    expect(result.isValid).not.toBeTruthy();
    expect(result.errors).toEqual([{"message": "password must contain at least one digit.", "type": "digit"}])
  })

  it("knows thePhysical1234567 is in valid because of exceeding the 15 character length", () => {
    const result = isValidPassword("thePhysical1234567");
    expect(result.isValid).not.toBeTruthy();
    expect(result.errors).toEqual([{"message": "password must be less than 15 characters", "type": "length"}])
  })

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


