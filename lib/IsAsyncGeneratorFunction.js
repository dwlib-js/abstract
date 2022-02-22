'use strict';

const {
  AsyncGeneratorFunction,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('@dwlib/primordials');

const IsAsyncGeneratorFunction = AsyncGeneratorFunction ? FunctionBind(FunctionPrototypeSymbolHasInstance, AsyncGeneratorFunction) : () => false;
module.exports = IsAsyncGeneratorFunction;
