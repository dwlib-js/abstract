'use strict';

const IsNegativeZero = argument => argument === 0 && (1 / argument) === -Infinity;
module.exports = IsNegativeZero;
