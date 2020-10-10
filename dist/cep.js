"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cepUnmask = exports.cepMask = void 0;
function cepMask(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{5})(\d)/, '$1-$2');
    return value;
}
exports.cepMask = cepMask;
function cepUnmask(value) {
    value = value.replace(/\D/g, '');
    return value;
}
exports.cepUnmask = cepUnmask;
