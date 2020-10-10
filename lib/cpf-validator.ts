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
