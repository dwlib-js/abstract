'use strict';

const {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Map
} = require('@dwlib/primordials');

const IsMap = FunctionBind(FunctionPrototypeSymbolHasInstance, Map);
module.exports = IsMap;
