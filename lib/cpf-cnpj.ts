// CPF and CNPJ Mask
export function cpfCnpjMask(value: any): string {
  value = value.replace(/\D/g, '')

  if (value.length < 14) {
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  } else {
    value = value.replace(/^(\d{2})(\d)/, '$1.$2')
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2')
    value = value.replace(/(\d{4})(\d)/, '$1-$2')
  }

  return value
}

// CPF and CNPJ Unmask
export function cpfCnpjUnmask(value: string): string {
  return value.replace(/\D/g, '')
}

// CPF Validation
export function cpfValidator(value: string): boolean {
  let numbers, digits, sum, i, result, equal_digits
  equal_digits = 1

  let cpf = value.replace(/\D/g, '')

  if (cpf.length < 11) return false

  for (i = 0; i < cpf.length - 1; i++)
    if (cpf.charAt(i) != cpf.charAt(i + 1)) {
      equal_digits = 0
      break
    }

  if (!equal_digits) {
    numbers = cpf.substring(0, 9)
    digits = cpf.substring(9)
    sum = 0

    for (i = 10; i > 1; i--) sum += numbers.charAt(10 - i) * i
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11)

    if (result != digits.charAt(0)) return false

    numbers = cpf.substring(0, 10)
    sum = 0

    for (i = 11; i > 1; i--) sum += numbers.charAt(11 - i) * i
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11)

    if (result != digits.charAt(1)) return false
    return true
  } else {
    return false
  }
}

// CNPJ Validation
export function cnpjValidator(value: string): boolean {
  let cnpj = value.replace(/[^\d]+/g, '')

  if (cnpj.length !== 14) return false

  if (/^(\d)\1+$/.test(cnpj)) return false

  let t = cnpj.length - 2,
    d = cnpj.substring(t),
    d1 = parseInt(d.charAt(0)),
    d2 = parseInt(d.charAt(1)),
    calc = (x: any) => {
      let n: any = cnpj.substring(0, x),
        y = x - 7,
        s = 0,
        r = 0

      for (let i = x; i >= 1; i--) {
        s += n.charAt(x - i) * y--
        if (y < 2) y = 9
      }

      r = 11 - (s % 11)
      return r > 9 ? 0 : r
    }
  return calc(t) === d1 && calc(t + 1) === d2
}
