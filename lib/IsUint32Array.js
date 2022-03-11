'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Uint32Array
} = require('#primordials');

const IsUint32Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Uint32Array);
module.exports = IsUint32Array;
