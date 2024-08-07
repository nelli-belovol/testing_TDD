import { validatePassword } from './validate-password';

describe('validatePassword', () => {
  it('should return true if password is valid', () => {
    const validPassword = 'MyPassword123!';

    expect(validatePassword(validPassword)).toBe(true);
  });
  it('should validate a password against 9 minimum characters', () => {
    const invalidPassword = 'MyPs67!';

    expect(validatePassword(invalidPassword)).toBe(false);
  });
  it('should validate a password against mixed cases', () => {
    const invalidPassword1 = 'mypassword12!';
    const invalidPassword2 = 'MYPASSWORD12!';

    expect(validatePassword(invalidPassword1)).toBe(false);
    expect(validatePassword(invalidPassword2)).toBe(false);
  });
  it('should validate a password against digits and characters', () => {
    const invalidPassword1 = 'MyPassword!@';
    const invalidPassword2 = 'MyPassword#!';

    expect(validatePassword(invalidPassword1)).toBe(false);
    expect(validatePassword(invalidPassword2)).toBe(false);
  });
  it('should validate a password against special characters', () => {
    const invalidPassword = 'MyPassword123';

    expect(validatePassword(invalidPassword)).toBe(false);
  });
  // it('should validate a password against dummy passwords');
});
