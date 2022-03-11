'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  RegExp
} = require('#primordials');

const IsRegExp = FunctionBind(FunctionPrototypeSymbolHasInstance, RegExp);
module.exports = IsRegExp;
