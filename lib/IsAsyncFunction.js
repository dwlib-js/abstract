'use strict';

const {
  AsyncFunction,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('#primordials');

const IsAsyncFunction = AsyncFunction ? FunctionBind(FunctionPrototypeSymbolHasInstance, AsyncFunction) : () => false;
module.exports = IsAsyncFunction;
