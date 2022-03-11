'use strict';

const {
  BigInt,
  TypeError
} = require('#primordials');
const ToPrimitive = require('./ToPrimitive');

const ToBigInt = argument => {
  const value = ToPrimitive(argument, 'number');
  const type = typeof value;
  if (type === 'bigint') {
    return value;
  }
  if (value == null || type === 'number' || type === 'symbol') {
    throw new TypeError(`Cannot convert ${value != null ? type : value} to bigint`);
  }
  return BigInt(value);
}
module.exports = ToBigInt;
