'use strict';

const {
  MathFloor
} = require('#primordials');
const ToNumber = require('./ToNumber');

const ToInteger = argument => {
  const number = ToNumber(argument);
  if (!number || number === Infinity || number === -Infinity || number > -1 && number < 1) {
    return 0;
  }
  const isNegative = number < 0;
  const integer = MathFloor(isNegative ? -number : number);
  return isNegative ? -integer : integer;
}
module.exports = ToInteger;
