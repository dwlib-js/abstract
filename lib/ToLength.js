'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const ToIntegerOrInfinity = require('./ToIntegerOrInfinity');

const MAX_SAFE_INTEGER = GetIntrinsicOrThrow('Number.MAX_SAFE_INTEGER');

const ToLength = argument => {
  const number = ToIntegerOrInfinity(argument);
  return number <= 0 ? 0 : number >= MAX_SAFE_INTEGER ? MAX_SAFE_INTEGER : number;
}

module.exports = ToLength;
