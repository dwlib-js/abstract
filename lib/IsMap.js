'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Map
} = require('#primordials');

const IsMap = FunctionBind(FunctionPrototypeSymbolHasInstance, Map);
module.exports = IsMap;
