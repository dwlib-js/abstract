'use strict';

const Modulo = require('./Modulo');
const ToInteger = require('./ToInteger');

const ToUint8 = argument => {
  const integer = ToInteger(argument);
  return Modulo(integer, 0x100);
}

module.exports = ToUint8;
