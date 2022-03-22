'use strict';

const ToUint32 = require('./ToUint32');

const ToInt32 = argument => {
  const integer = ToUint32(argument);
  return integer > 0x7fffffff ? integer - 0x100000000 : integer;
}

module.exports = ToInt32;
