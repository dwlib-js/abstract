'use strict';

const {
  Error,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('@dwlib/primordials');

const IsError = FunctionBind(FunctionPrototypeSymbolHasInstance, Error);
module.exports = IsError;
