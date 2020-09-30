"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telephoneUnmask = exports.telephoneMask = exports.telephoneValidator = void 0;
// Telephone Validation
function telephoneValidator(telephone) {
    const regex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
    let isValid = regex.test(telephone);
    return isValid;
}
exports.telephoneValidator = telephoneValidator;
// Telephone Mask
function telephoneMask(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    return value;
}
exports.telephoneMask = telephoneMask;
// Telephone Unmask
function telephoneUnmask(value) {
    value = value.replace(/\D/g, '');
    return value;
}
exports.telephoneUnmask = telephoneUnmask;
