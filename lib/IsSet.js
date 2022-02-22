'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Set
} = require('@dwlib/primordials');

const IsSet = FunctionBind(FunctionPrototypeSymbolHasInstance, Set);
module.exports = IsSet;
