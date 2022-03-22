'use strict';

const ToLength = require('./ToLength');

const LengthOfArrayLike = object => {
  const length = object.length;
  return ToLength(length);
}

module.exports = LengthOfArrayLike;
