'use strict';

const IsPropertyKey = require('#types/isPropertyKey');
const ToPrimitive = require('./ToPrimitive');
const ToString = require('./ToString');

const ToPropertyKey = argument => {
  const key = ToPrimitive(argument, 'string');
  return IsPropertyKey(key) ? key : ToString(key);
}

module.exports = ToPropertyKey;
