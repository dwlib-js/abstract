'use strict';

const Object = require('#primordials/Object');
const TypeError = require('#primordials/TypeError');

const ToObject = argument => {
  if (argument == null) {
    throw new TypeError(`Cannot convert ${argument} to object`);
  }
  return Object(argument);
}

module.exports = ToObject;
