'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  WeakSet
} = require('#primordials');

const IsWeakSet = FunctionBind(FunctionPrototypeSymbolHasInstance, WeakSet);
module.exports = IsWeakSet;
