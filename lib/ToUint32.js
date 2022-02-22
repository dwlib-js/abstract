'use strict';

const ToInteger = require('./ToInteger');
const Modulo = require('./Modulo');

const ToUint32 = argument => {
  const integer = ToInteger(argument);
  return Modulo(integer, 0x100000000);
}
module.exports = ToUint32;
