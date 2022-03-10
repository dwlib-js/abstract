'use strict';

const {
  TypeError
} = require('@dwlib/primordials');
const IsObject = require('./IsObject');

const RequireTargetObject = argument => {
  if (!IsObject(argument)) {
    throw new TypeError('Target is not an object');
  }
}
module.exports = RequireTargetObject;
