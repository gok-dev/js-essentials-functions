export function dateMask(date: string): string {
  let value = date.replace(/\D/g, '')

  value = value.replace(/(\d{2})(\d)/, '$1/$2')
  value = value.replace(/(\d{2})(\d)/, '$1/$2')

  return value
}

export function dateMaskUS(date: string): string {
  let value = date.replace(/\D/g, '')

  value = value.replace(/(\d{4})(\d{2})(\d)/, '$1-$2-$3')

  return value
}

export function cardExpirationDateMask(date: string): string {
  let value = date.replace(/\D/g, '')

  value = value.replace(/(\d{2})(\d)/, '$1/$2')

  return value
}

