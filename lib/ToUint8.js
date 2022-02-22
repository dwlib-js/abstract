'use strict';

const ToInteger = require('./ToInteger');
const Modulo = require('./Modulo');

const ToUint8 = argument => {
  const integer = ToInteger(argument);
  return Modulo(integer, 0x100);
}
module.exports = ToUint8;
