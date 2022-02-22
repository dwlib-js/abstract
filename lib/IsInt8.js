'use strict';

const IsInteger = require('./IsInteger');

const IsInt8 = argument => IsInteger(argument) && argument >= -0x80 && argument <= 0x7f;
module.exports = IsInt8;
