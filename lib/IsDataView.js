'use strict';

const {
  DataView,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('@dwlib/primordials');

const IsDataView = FunctionBind(FunctionPrototypeSymbolHasInstance, DataView);
module.exports = IsDataView;
