"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailValidation = void 0;
exports.emailValidation = (email) => {
    let reg = /^[a-z][_a-z0-9\-.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    return reg.test(email);
};
