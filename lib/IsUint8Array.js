'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Uint8Array
} = require('@dwlib/primordials');

const IsUint8Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint8Array);
module.exports = IsUint8Array;