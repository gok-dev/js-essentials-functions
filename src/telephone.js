
// Telephone Validation
export const telephoneValidator = (telephone) => {
  const regex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
  let isValid = regex.test(telephone);

  return isValid;
};

// Telephone Mask
export const telephoneMask = (value) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
  value = value.replace(/(\d)(\d{4})$/, '$1-$2');

  return value;
};

// Telephone Unmask
export const telephoneUnmask = (value) => {
  value = value.replace(/\D/g, '');

  return value;
};