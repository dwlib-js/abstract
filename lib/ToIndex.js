'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const RangeError = require('#primordials/RangeError');
const ToIntegerOrInfinity = require('./ToIntegerOrInfinity');

const MAX_SAFE_INTEGER = GetIntrinsicOrThrow('Number.MAX_SAFE_INTEGER');

const ToIndex = argument => {
  const number = ToIntegerOrInfinity(argument);
  if (number < 0 || number > MAX_SAFE_INTEGER) {
    throw new RangeError('Index out of range');
  }
  return number;
}

module.exports = ToIndex;
