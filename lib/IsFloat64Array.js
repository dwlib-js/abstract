'use strict';

const {
  Float64Array,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('@dwlib/primordials');

const IsFloat64Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Float64Array);
module.exports = IsFloat64Array;
