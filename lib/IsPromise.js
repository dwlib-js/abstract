'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Promise
} = require('@dwlib/primordials');

const IsPromise = FunctionBind(FunctionPrototypeSymbolHasInstance, Promise);
module.exports = IsPromise;
