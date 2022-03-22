'use strict';

const MathFloor = require('#primordials/MathFloor');
const ToNumber = require('./ToNumber');

const ToIntegerOrInfinity = argument => {
  const number = ToNumber(argument);
  if (!number || number > -1 && number < 1) {
    return 0;
  }
  if (number === Infinity || number === -Infinity) {
    return number;
  }
  const isNegative = number < 0;
  const integer = MathFloor(isNegative ? -number : number);
  return isNegative ? -integer : integer;
}

module.exports = ToIntegerOrInfinity;
