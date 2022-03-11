'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  SyntaxError
} = require('#primordials');

const IsSyntaxError = FunctionBind(FunctionPrototypeSymbolHasInstance, SyntaxError);
module.exports = IsSyntaxError;
