'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  SharedArrayBuffer
} = require('#primordials');

const IsSharedArrayBuffer = SharedArrayBuffer ? FunctionBind(FunctionPrototypeSymbolHasInstance, SharedArrayBuffer) : () => false;
module.exports = IsSharedArrayBuffer;
