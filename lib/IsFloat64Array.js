'use strict';

const {
  Float64Array,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('#primordials');

const IsFloat64Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Float64Array);
module.exports = IsFloat64Array;
