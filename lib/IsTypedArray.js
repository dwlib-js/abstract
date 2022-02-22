'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  TypedArray
} = require('@dwlib/primordials');

const IsTypedArray = FunctionBind(FunctionPrototypeSymbolHasInstance, TypedArray);
module.exports = IsTypedArray;
