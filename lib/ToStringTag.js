'use strict';

const ObjectToString = require('#primordials/ObjectToString');
const StringSlice = require('#primordials/StringSlice');

const ToStringTag = argument => {
  const string = ObjectToString(argument);
  return StringSlice(string, 8, -1);
}

module.exports = ToStringTag;
