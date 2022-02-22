'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Int16Array
} = require('@dwlib/primordials');

const IsInt16Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Int16Array);
module.exports = IsInt16Array;
