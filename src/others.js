// CEP Mask
export const cepMask = (value) => {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2")

  return value;
}

// CEP Unmask
export const cepUnmask = (value) => {
  value = value.replace(/\D/g, "");

  return value;
}

// Email validation
export const emailValidation = (email) => {
  let reg = /^[a-z][_a-z0-9\-.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  return reg.test(email);
};
