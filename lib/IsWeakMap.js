'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  WeakMap
} = require('#primordials');

const IsWeakMap = FunctionBind(FunctionPrototypeSymbolHasInstance, WeakMap);
module.exports = IsWeakMap;
