'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Promise
} = require('#primordials');

const IsPromise = FunctionBind(FunctionPrototypeSymbolHasInstance, Promise);
module.exports = IsPromise;
