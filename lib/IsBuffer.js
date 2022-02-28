'use strict';

const {
  ArrayBufferIsView
} = require('@dwlib/primordials');
const IsArrayBuffer = require('./IsArrayBuffer');

const IsBuffer = argument => IsArrayBuffer(argument) || ArrayBufferIsView(argument);
module.exports = IsBuffer;
