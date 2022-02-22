'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Uint16Array
} = require('@dwlib/primordials');

const IsUint16Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint16Array);
module.exports = IsUint16Array;