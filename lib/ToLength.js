'use strict';

const {
  NumberMAX_SAFE_INTEGER
} = require('#primordials');
const ToIntegerOrInfinity = require('./ToIntegerOrInfinity');

const ToLength = argument => {
  const number = ToIntegerOrInfinity(argument);
  return number <= 0 ? 0 : number >= NumberMAX_SAFE_INTEGER ? NumberMAX_SAFE_INTEGER : number;
}
module.exports = ToLength;
