import { cpfCnpjMask, cpfCnpjUnmask } from '../lib/cpf-cnpj'
import { cpfValidator } from '../lib/cpf-validator'
import { cnpjValidator } from '../lib/cnpj-validator'

describe('Cpf and Cnpj mask', () => {
  it('should be add mask on cpf number', () => {
    const cpf = '16292619044'
    const cpfMasked = cpfCnpjMask(cpf)

    expect(cpfMasked).toBe('162.926.190-44')
  })

  it('should be remove mask on cpf number', () => {
    const cpf = '162.926.190-44'
    const cpfUnMasked = cpfCnpjUnmask(cpf)

    expect(cpfUnMasked).toBe('16292619044')
  })

  it('should be add mask on cnpj number', () => {
    const cnpj = '53107357000130'
    const cnpjMasked = cpfCnpjMask(cnpj)

    expect(cnpjMasked).toBe('53.107.357/0001-30')
  })

  it('should be remove mask on cnpj number', () => {
    const cnpj = '53.107.357/0001-30'
    const cnpjUnMasked = cpfCnpjUnmask(cnpj)

    expect(cnpjUnMasked).toBe('53107357000130')
  })

  it('should be a valid cpf', () => {
    const cpf = '16292619044'
    const cpfIsValid = cpfValidator(cpf)

    expect(cpfIsValid).toBeTruthy
  })

  it('should be a valid cpf with special characters', () => {
    const cpf = '162.926.190-44'
    const cpfIsValid = cpfValidator(cpf)

    expect(cpfIsValid).toBeTruthy
  })

  it('should be a invalid cpf', () => {
    const invalidCpf = '162926190441'
    const cpfIsInvalid = cpfValidator(invalidCpf)

    expect(cpfIsInvalid).toBeFalsy
  })

  it('should be a invalid cpf with special characters', () => {
    const invalidCpf = '162.926.190-441'
    const cpfIsInvalid = cpfValidator(invalidCpf)

    expect(cpfIsInvalid).toBeFalsy
  })

  it('should be a valid cnpj', () => {
    const cnpj = '53107357000130'
    const cpnpjIsValid = cnpjValidator(cnpj)

    expect(cpnpjIsValid).toBeTruthy
  })

  it('should be a valid cnpj with special characters', () => {
    const cnpj = '53.107.357/0001-30'
    const cnpjIsValid = cnpjValidator(cnpj)

    expect(cnpjIsValid).toBeTruthy
  })

  it('should be a invalid cnpj', () => {
    const invalidCnpj = '5310735700013'
    const cnpjIsInvalid = cnpjValidator(invalidCnpj)

    expect(cnpjIsInvalid).toBeFalsy
  })

  it('should be a invalid cnpj with special characters', () => {
    const invalidCnpj = '53.107.357/001-30'
    const cnpjIsInvalid = cnpjValidator(invalidCnpj)

    expect(cnpjIsInvalid).toBeFalsy
  })
})
