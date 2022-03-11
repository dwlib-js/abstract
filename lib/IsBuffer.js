'use strict';

const {
  ArrayBufferIsView
} = require('#primordials');
const IsArrayBuffer = require('./IsArrayBuffer');

const IsBuffer = argument => IsArrayBuffer(argument) || ArrayBufferIsView(argument);
module.exports = IsBuffer;
