'use strict';

const {
  NumberMAX_SAFE_INTEGER,
  NumberMIN_SAFE_INTEGER
} = require('#primordials');
const ToIntegerOrInfinity = require('./ToIntegerOrInfinity');

const ToSafeInteger = argument => {
  const number = ToIntegerOrInfinity(argument);
  return number <= NumberMIN_SAFE_INTEGER ? NumberMIN_SAFE_INTEGER :
    number >= NumberMAX_SAFE_INTEGER ? NumberMAX_SAFE_INTEGER : number;
}
module.exports = ToSafeInteger;
