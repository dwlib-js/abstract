'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  GeneratorFunction
} = require('#primordials');

const IsGeneratorFunction = FunctionBind(FunctionPrototypeSymbolHasInstance, GeneratorFunction);
module.exports = IsGeneratorFunction;
