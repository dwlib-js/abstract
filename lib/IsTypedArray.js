'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  TypedArray
} = require('#primordials');

const IsTypedArray = FunctionBind(FunctionPrototypeSymbolHasInstance, TypedArray);
module.exports = IsTypedArray;
