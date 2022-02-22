'use strict';

const {
  BigUint64Array,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('@dwlib/primordials');

const IsBigUint64Array = BigUint64Array ? FunctionBind(FunctionPrototypeSymbolHasInstance, BigUint64Array) : () => false;
module.exports = IsBigUint64Array;
