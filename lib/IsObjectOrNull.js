'use strict';

const IsObjectOrNull = argument => {
  const type = typeof argument;
  return type === 'object' || type === 'function';
}
module.exports = IsObjectOrNull;
