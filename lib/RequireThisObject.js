'use strict';

const TypeError = require('#primordials/TypeError');
const IsObject = require('#types/isObject');

const RequireThisObject = argument => {
  if (!IsObject(argument)) {
    throw new TypeError(`'this' is not an object`);
  }
}

module.exports = RequireThisObject;
