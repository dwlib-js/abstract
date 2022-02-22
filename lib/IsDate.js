'use strict';

const {
  Date,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('@dwlib/primordials');

const IsDate = FunctionBind(FunctionPrototypeSymbolHasInstance, Date);
module.exports = IsDate;
