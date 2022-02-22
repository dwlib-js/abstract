'use strict';

const IsPropertyKey = argument => {
  const type = typeof argument;
  return type === 'string' || type === 'symbol';
}
module.exports = IsPropertyKey;
