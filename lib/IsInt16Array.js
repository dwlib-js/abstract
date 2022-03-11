'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Int16Array
} = require('#primordials');

const IsInt16Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Int16Array);
module.exports = IsInt16Array;
