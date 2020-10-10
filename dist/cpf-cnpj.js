"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cpfCnpjUnmask = exports.cpfCnpjMask = void 0;
function cpfCnpjMask(value) {
    value = value.replace(/\D/g, '');
    if (value.length < 14) {
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    else {
        value = value.replace(/^(\d{2})(\d)/, '$1.$2');
        value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
        value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');
    }
    return value;
}
exports.cpfCnpjMask = cpfCnpjMask;
function cpfCnpjUnmask(value) {
    return value.replace(/\D/g, '');
}
exports.cpfCnpjUnmask = cpfCnpjUnmask;
