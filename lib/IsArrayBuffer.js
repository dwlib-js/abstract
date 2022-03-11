'use strict';

const {
  ArrayBuffer,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('#primordials');

const IsArrayBuffer = FunctionBind(FunctionPrototypeSymbolHasInstance, ArrayBuffer);
module.exports = IsArrayBuffer;
