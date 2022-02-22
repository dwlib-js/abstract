'use strict';

const ToInteger = require('./ToInteger');
const Modulo = require('./Modulo');

const ToUint16 = argument => {
  const integer = ToInteger(argument);
  return Modulo(integer, 0x10000);
}
module.exports = ToUint16;
