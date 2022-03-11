'use strict';

const {
  String,
  TypeError
} = require('#primordials');
const ToPrimitive = require('./ToPrimitive');

const ToString = argument => {
  const string = ToPrimitive(argument, 'string');
  const type = typeof string;
  if (type === 'string') {
    return string;
  }
  if (type === 'symbol') {
    throw new TypeError('Cannot convert symbol to string');
  }
  return String(string);
}
module.exports = ToString;
