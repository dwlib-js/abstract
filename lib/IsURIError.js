'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  URIError
} = require('#primordials');

const IsURIError = FunctionBind(FunctionPrototypeSymbolHasInstance, URIError);
module.exports = IsURIError;
