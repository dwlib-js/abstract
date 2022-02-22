'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  RegExp
} = require('@dwlib/primordials');

const IsRegExp = FunctionBind(FunctionPrototypeSymbolHasInstance, RegExp);
module.exports = IsRegExp;
