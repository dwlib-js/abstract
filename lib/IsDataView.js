'use strict';

const {
  DataView,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('#primordials');

const IsDataView = FunctionBind(FunctionPrototypeSymbolHasInstance, DataView);
module.exports = IsDataView;
