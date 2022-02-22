'use strict';

const IsFunction = require('./IsFunction');
const IsClassConstructor = require('./IsClassConstructor');

const IsCallable = argument => IsFunction(argument) && !IsClassConstructor(argument);
module.exports = IsCallable;
