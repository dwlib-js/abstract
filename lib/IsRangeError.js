'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  RangeError
} = require('@dwlib/primordials');

const IsRangeError = FunctionBind(FunctionPrototypeSymbolHasInstance, RangeError);
module.exports = IsRangeError;
