'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  SyntaxError
} = require('@dwlib/primordials');

const IsSyntaxError = FunctionBind(FunctionPrototypeSymbolHasInstance, SyntaxError);
module.exports = IsSyntaxError;
