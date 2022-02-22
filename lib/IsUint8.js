'use strict';

const IsInteger = require('./IsInteger');

const IsUint8 = argument => IsInteger(argument) && argument >= 0 && argument <= 0xff;
module.exports = IsUint8;
