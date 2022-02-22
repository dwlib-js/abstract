'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  SharedArrayBuffer
} = require('@dwlib/primordials');

const IsSharedArrayBuffer = SharedArrayBuffer ? FunctionBind(FunctionPrototypeSymbolHasInstance, SharedArrayBuffer) : () => false;
module.exports = IsSharedArrayBuffer;
