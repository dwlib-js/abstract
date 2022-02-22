'use strict';

const ToPrimitive = require('./ToPrimitive');
const IsNumeric = require('./IsNumeric');
const ToNumber = require('./ToNumber');

const ToNumeric = argument => {
  const value = ToPrimitive(argument, 'number');
  return IsNumeric(value) ? value : ToNumber(value);
}
module.exports = ToNumeric;
