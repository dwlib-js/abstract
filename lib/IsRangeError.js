'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  RangeError
} = require('#primordials');

const IsRangeError = FunctionBind(FunctionPrototypeSymbolHasInstance, RangeError);
module.exports = IsRangeError;
