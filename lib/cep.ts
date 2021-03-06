export function cepMask(value: string): string {
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{5})(\d)/, '$1-$2')

  return value
}

export function cepUnmask(value: string): string {
  value = value.replace(/\D/g, '')

  return value
}
