'use strict';

const {
  Date,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('#primordials');

const IsDate = FunctionBind(FunctionPrototypeSymbolHasInstance, Date);
module.exports = IsDate;
