'use strict';

const {
  ArrayBuffer,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('@dwlib/primordials');

const IsArrayBuffer = FunctionBind(FunctionPrototypeSymbolHasInstance, ArrayBuffer);
module.exports = IsArrayBuffer;
