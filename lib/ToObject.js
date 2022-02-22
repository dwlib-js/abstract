'use strict';

const {
  Object,
  TypeError
} = require('@dwlib/primordials');

const ToObject = argument => {
  if (argument == null) {
    throw new TypeError(`Cannot convert ${argument} to object`);
  }
  return Object(argument);
}
module.exports = ToObject;
