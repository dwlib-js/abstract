'use strict';

const {
  Float32Array,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('#primordials');

const IsFloat32Array = FunctionBind(FunctionPrototypeSymbolHasInstance, Float32Array);
module.exports = IsFloat32Array;
