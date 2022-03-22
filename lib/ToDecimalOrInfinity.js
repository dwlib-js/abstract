'use strict';

const ToNumber = require('./ToNumber');

const ToDecimalOrInfinity = argument => {
  const number = ToNumber(argument);
  return number || 0;
}

module.exports = ToDecimalOrInfinity;
