'use strict';

const IsNumeric = argument => {
  const type = typeof argument;
  return type === 'number' || type === 'bigint';
}
module.exports = IsNumeric;
