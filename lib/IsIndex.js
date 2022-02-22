'use strict';

const IsSafeInteger = require('./IsSafeInteger');

const IsIndex = argument => IsSafeInteger(argument) && argument >= 0;
module.exports = IsIndex;
