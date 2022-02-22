'use strict';

const {
  NumberMAX_SAFE_INTEGER,
  RangeError
} = require('@dwlib/primordials');
const ToIntegerOrInfinity = require('./ToIntegerOrInfinity');

const ToIndex = argument => {
  const number = ToIntegerOrInfinity(argument);
  if (number < 0 || number > NumberMAX_SAFE_INTEGER) {
    throw new RangeError('Index out of range');
  }
  return number;
}
module.exports = ToIndex;
