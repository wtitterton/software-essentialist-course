

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
})


