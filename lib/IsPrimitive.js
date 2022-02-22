'use strict';

const IsObject = require('./IsObject');

const IsPrimitive = argument => !IsObject(argument);
module.exports = IsPrimitive;
