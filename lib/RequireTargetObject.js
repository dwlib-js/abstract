'use strict';

const TypeError = require('#primordials/TypeError');
const IsObject = require('#types/isObject');

const RequireTargetObject = argument => {
  if (!IsObject(argument)) {
    throw new TypeError('target is not an object');
  }
}

module.exports = RequireTargetObject;
