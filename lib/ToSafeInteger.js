'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const ToIntegerOrInfinity = require('./ToIntegerOrInfinity');

const MAX_SAFE_INTEGER = GetIntrinsicOrThrow('Number.MAX_SAFE_INTEGER');
const MIN_SAFE_INTEGER = GetIntrinsicOrThrow('Number.MIN_SAFE_INTEGER');

const ToSafeInteger = argument => {
  const number = ToIntegerOrInfinity(argument);
  return number <= MIN_SAFE_INTEGER ? MIN_SAFE_INTEGER :
    number >= MAX_SAFE_INTEGER ? MAX_SAFE_INTEGER : number;
}

module.exports = ToSafeInteger;
