'use strict';

const {
  AsyncFunction,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('@dwlib/primordials');

const IsAsyncFunction = AsyncFunction ? FunctionBind(FunctionPrototypeSymbolHasInstance, AsyncFunction) : () => false;
module.exports = IsAsyncFunction;
