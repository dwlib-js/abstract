'use strict';

const IsInteger = require('./IsInteger');

const IsUint16 = argument => IsInteger(argument) && argument >= 0 && argument <= 0xffff;
module.exports = IsUint16;
