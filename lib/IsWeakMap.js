'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  WeakMap
} = require('@dwlib/primordials');

const IsWeakMap = FunctionBind(FunctionPrototypeSymbolHasInstance, WeakMap);
module.exports = IsWeakMap;
