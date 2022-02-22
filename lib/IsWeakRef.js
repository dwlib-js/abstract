'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  WeakRef
} = require('@dwlib/primordials');

const IsWeakRef = WeakRef ? FunctionBind(FunctionPrototypeSymbolHasInstance, WeakRef) : () => false;
module.exports = IsWeakRef;
