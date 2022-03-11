'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  ReferenceError
} = require('#primordials');

const IsReferenceError = FunctionBind(FunctionPrototypeSymbolHasInstance, ReferenceError);
module.exports = IsReferenceError;
