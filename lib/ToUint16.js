'use strict';

const Modulo = require('./Modulo');
const ToInteger = require('./ToInteger');

const ToUint16 = argument => {
  const integer = ToInteger(argument);
  return Modulo(integer, 0x10000);
}

module.exports = ToUint16;
