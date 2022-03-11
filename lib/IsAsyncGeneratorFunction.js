'use strict';

const {
  AsyncGeneratorFunction,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('#primordials');

const IsAsyncGeneratorFunction = AsyncGeneratorFunction ? FunctionBind(FunctionPrototypeSymbolHasInstance, AsyncGeneratorFunction) : () => false;
module.exports = IsAsyncGeneratorFunction;
