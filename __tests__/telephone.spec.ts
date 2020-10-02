import { telephoneMask, telephoneUnmask, telephoneValidator } from '../lib/telephone'

describe('Telephone Mask', () => {
  it('should be add mask on phone number', () => {
    const phone = '1144445555'
    const phoneMasked = telephoneMask(phone)

    expect(phoneMasked).toBe('(11) 4444-5555')
  })

  it('should be add mask on cell phone number', () => {
    const cellPhone = '11988887777'
    const cellPhoneMasked = telephoneMask(cellPhone)

    expect(cellPhoneMasked).toBe('(11) 98888-7777')
  })

  it('should be remove mask on phone number', () => {
    const phone = '(11) 4444-5555'
    const phoneUnMasked = telephoneUnmask(phone)

    expect(phoneUnMasked).toBe('1144445555')
  })

  it('should be remove mask on cell phone number', () => {
    const cellPhone = '(11) 98888-7777'
    const cellPhoneUnMasked = telephoneUnmask(cellPhone)

    expect(cellPhoneUnMasked).toBe('11988887777')
  })

  it('should be valid phone number', () => {
    const cellPhone = '1144445555'
    const phoneIsValid = telephoneValidator(cellPhone)

    expect(phoneIsValid).toBeTruthy
  })

  it('should be valid phone number with special characters', () => {
    const cellPhone = '(11) 4444-5555'
    const phoneIsValid = telephoneValidator(cellPhone)

    expect(phoneIsValid).toBeTruthy
  })

  it('should be valid cell phone number', () => {
    const cellPhone = '11988887777'
    const cellPhoneIsValid = telephoneValidator(cellPhone)

    expect(cellPhoneIsValid).toBeTruthy
  })

  it('should be valid cell phone number with special characters', () => {
    const cellPhone = '(11) 98888-7777'
    const cellPhoneIsValid = telephoneValidator(cellPhone)

    expect(cellPhoneIsValid).toBeTruthy
  })
})
