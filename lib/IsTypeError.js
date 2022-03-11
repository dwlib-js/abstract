'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  TypeError
} = require('#primordials');

const IsTypeError = FunctionBind(FunctionPrototypeSymbolHasInstance, TypeError);
module.exports = IsTypeError;
