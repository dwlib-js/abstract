'use strict';

const IsObjectOrNull = require('./IsObjectOrNull');

const IsObject = argument => argument != null && IsObjectOrNull(argument);
module.exports = IsObject;
