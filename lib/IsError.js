'use strict';

const {
  Error,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('#primordials');

const IsError = FunctionBind(FunctionPrototypeSymbolHasInstance, Error);
module.exports = IsError;
