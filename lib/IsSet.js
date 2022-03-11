'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Set
} = require('#primordials');

const IsSet = FunctionBind(FunctionPrototypeSymbolHasInstance, Set);
module.exports = IsSet;
