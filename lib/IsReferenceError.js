'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  ReferenceError
} = require('@dwlib/primordials');

const IsReferenceError = FunctionBind(FunctionPrototypeSymbolHasInstance, ReferenceError);
module.exports = IsReferenceError;
