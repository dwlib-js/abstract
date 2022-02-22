'use strict';

const ToPrimitive = require('./ToPrimitive');
const IsPropertyKey = require('./IsPropertyKey');
const ToString = require('./ToString');

const ToPropertyKey = argument => {
  const key = ToPrimitive(argument, 'string');
  return IsPropertyKey(key) ? key : ToString(key);
}
module.exports = ToPropertyKey;
