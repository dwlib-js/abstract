'use strict';

const Number = require('#primordials/Number');
const TypeError = require('#primordials/TypeError');
const ToPrimitive = require('./ToPrimitive');

const ToNumber = argument => {
  const value = ToPrimitive(argument, 'number');
  const type = typeof value;
  if (type === 'number') {
    return value;
  }
  if (type === 'symbol' || type === 'bigint') {
    throw new TypeError(`Cannot convert ${type} to number`);
  }
  return Number(value);
}

module.exports = ToNumber;
