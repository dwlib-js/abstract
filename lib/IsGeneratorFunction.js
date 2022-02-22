'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  GeneratorFunction
} = require('@dwlib/primordials');

const IsGeneratorFunction = FunctionBind(FunctionPrototypeSymbolHasInstance, GeneratorFunction);
module.exports = IsGeneratorFunction;
