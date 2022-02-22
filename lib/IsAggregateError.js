'use strict';

const {
  AggregateError,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('@dwlib/primordials');

const IsAggregateError = AggregateError ? FunctionBind(FunctionPrototypeSymbolHasInstance, AggregateError) : () => false;
module.exports = IsAggregateError;
