import { emailValidation } from '../lib/others'

describe('Email validator', () => {
  it('should be valid email', () => {
    const email = 'john.due@mail.com'
    const emailIsValid = emailValidation(email)

    expect(emailIsValid).toBeTruthy
  })

  it('should be invalid email without @', () => {
    const invalidEmail = 'john.due.mail.com'
    const emailIsValid = emailValidation(invalidEmail)

    expect(emailIsValid).toBeFalsy
  })

  it('should be invalid email without \'.\' at the end of the email', () => {
    const invalidEmail = 'john.due@mail'
    const emailIsValid = emailValidation(invalidEmail)

    expect(emailIsValid).toBeFalsy
  })
})
