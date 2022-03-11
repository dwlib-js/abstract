'use strict';

const {
  BigInt64Array,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('#primordials');

const IsBigInt64Array = BigInt64Array ? FunctionBind(FunctionPrototypeSymbolHasInstance, BigInt64Array) : () => false;
module.exports = IsBigInt64Array;
