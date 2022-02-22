'use strict';

const IsObject = require('./IsObject');
const IsIndex = require('./IsIndex');

const IsArrayLike = argument => IsObject(argument) && IsIndex(argument.length);
module.exports = IsArrayLike;
