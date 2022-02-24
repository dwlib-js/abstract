'use strict';

const ToNumber = require('./ToNumber');

const ToDecimal = argument => {
  const number = ToNumber(argument);
  return number && number !== Infinity && number !== -Infinity ? number : 0;
}
module.exports = ToDecimal;
