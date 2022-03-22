'use strict';

const ToUint8 = require('./ToUint8');

const ToInt8 = argument => {
  const integer = ToUint8(argument);
  return integer > 0x7f ? integer - 0x100 : integer;
}

module.exports = ToInt8;
