'use strict';

const {
  FinalizationRegistry,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('#primordials');

const IsFinalizationRegistry = FinalizationRegistry ? FunctionBind(FunctionPrototypeSymbolHasInstance, FinalizationRegistry) : () => false;
module.exports = IsFinalizationRegistry;
