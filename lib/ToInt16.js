'use strict';

const ToUint16 = require('./ToUint16');

const ToInt16 = argument => {
  const integer = ToUint16(argument);
  return integer > 0x7fff ? integer - 0x10000 : integer;
}

module.exports = ToInt16;
