'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Int8Array
} = require('@dwlib/primordials');

const IsInt8Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Int8Array);
module.exports = IsInt8Array;
