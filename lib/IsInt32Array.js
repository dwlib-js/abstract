'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Int32Array
} = require('@dwlib/primordials');

const IsInt32Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Int32Array);
module.exports = IsInt32Array;
