'use strict';

const IsInteger = require('./IsInteger');

const IsUint32 = argument => IsInteger(argument) && argument >= 0 && argument <= 0xffffffff;
module.exports = IsUint32;
