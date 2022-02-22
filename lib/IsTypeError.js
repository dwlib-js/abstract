'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  TypeError
} = require('@dwlib/primordials');

const IsTypeError = FunctionBind(FunctionPrototypeSymbolHasInstance, TypeError);
module.exports = IsTypeError;
