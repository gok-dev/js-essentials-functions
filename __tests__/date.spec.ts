import { dateMask, dateMaskUS } from '../lib/date'

describe('Date pt-br mask', () => {
  it('should be add mask on date', () => {
    const date = '20082020'
    const dateMasked = dateMask(date)

    expect(dateMasked).toBe('20/08/2020')
  })
})

describe('Date en-us mask', () => {
  it('should be add mask us date', () => {
    const date = '20200820'
    const dateMasked = dateMaskUS(date)

    expect(dateMasked).toBe('2020-08-20')
  })
})
