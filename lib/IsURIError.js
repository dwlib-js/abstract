'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  URIError
} = require('@dwlib/primordials');

const IsURIError = FunctionBind(FunctionPrototypeSymbolHasInstance, URIError);
module.exports = IsURIError;
