'use strict';

const {
  AggregateError,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} = require('#primordials');

const IsAggregateError = AggregateError ? FunctionBind(FunctionPrototypeSymbolHasInstance, AggregateError) : () => false;
module.exports = IsAggregateError;
