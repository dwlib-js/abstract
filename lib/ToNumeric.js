'use strict';

const IsNumeric = require('#types/isNumeric');
const ToNumber = require('./ToNumber');
const ToPrimitive = require('./ToPrimitive');

const ToNumeric = argument => {
  const value = ToPrimitive(argument, 'number');
  return IsNumeric(value) ? value : ToNumber(value);
}

module.exports = ToNumeric;
