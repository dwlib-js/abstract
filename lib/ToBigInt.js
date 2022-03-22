'use strict';

const BigInt = require('#primordials/BigInt');
const TypeError = require('#primordials/TypeError');
const ToPrimitive = require('./ToPrimitive');

const ToBigInt = argument => {
  const value = ToPrimitive(argument, 'number');
  const type = typeof value;
  if (type === 'bigint') {
    return value;
  }
  if (value == null || type === 'number' || type === 'symbol') {
    throw new TypeError(`Cannot convert ${value === null ? 'null' : type} to bigint`);
  }
  return BigInt(value);
}

module.exports = ToBigInt;
