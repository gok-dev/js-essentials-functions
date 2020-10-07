import { cepMask, cepUnmask } from '../lib/cep'

describe('Cep Mask', () => {
  it('should be add mask on cep number', () => {
    const cep = '01234000'
    const cepMasked = cepMask(cep)

    expect(cepMasked).toBe('01234-000')
  })

  it('should be remove mask on cep number', () => {
    const cep = '01234-000'
    const cepUnMasked = cepUnmask(cep)

    expect(cepUnMasked).toBe('01234000')
  })
})
