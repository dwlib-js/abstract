'use strict';

const IsInteger = require('./IsInteger');

const IsInt32 = argument => IsInteger(argument) && argument >= -0x80000000 && argument <= 0x7fffffff;
module.exports = IsInt32;
