'use strict';

const {
  ObjectToString,
  StringSlice
} = require('#primordials');

const ToStringTag = argument => {
  const string = ObjectToString(argument);
  return StringSlice(string, 8, -1);
}
module.exports = ToStringTag;
