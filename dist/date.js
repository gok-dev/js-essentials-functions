"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardExpirationDateMask = exports.dateMaskUS = exports.dateMask = void 0;
function dateMask(date) {
    let value = date.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    return value;
}
exports.dateMask = dateMask;
function dateMaskUS(date) {
    let value = date.replace(/\D/g, '');
    value = value.replace(/(\d{4})(\d{2})(\d)/, '$1-$2-$3');
    return value;
}
exports.dateMaskUS = dateMaskUS;
function cardExpirationDateMask(date) {
    let value = date.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '$1/$2');
    return value;
}
exports.cardExpirationDateMask = cardExpirationDateMask;
