export function telephoneValidator(telephone: string): boolean {
  const regex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
  let isValid = regex.test(telephone)

  return isValid
}

export function telephoneMask(value: string): string {
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2')
  value = value.replace(/(\d)(\d{4})$/, '$1-$2')

  return value
}

export function telephoneUnmask(value: string): string {
  value = value.replace(/\D/g, '')

  return value
}
