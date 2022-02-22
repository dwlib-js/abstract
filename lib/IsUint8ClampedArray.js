'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Uint8ClampedArray
} = require('@dwlib/primordials');

const IsUint8ClampedArray = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint8ClampedArray);
module.exports = IsUint8ClampedArray;
