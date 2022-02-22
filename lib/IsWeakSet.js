'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  WeakSet
} = require('@dwlib/primordials');

const IsWeakSet = FunctionBind(FunctionPrototypeSymbolHasInstance, WeakSet);
module.exports = IsWeakSet;
