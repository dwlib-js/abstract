'use strict';

const {
  SymbolAsyncIterator
} = require('@dwlib/primordials');
const IsObject = require('./IsObject');
const IsCallable = require('./IsCallable');

const IsAsyncIterable = SymbolAsyncIterator ? argument => {
  if (!IsObject(argument)) {
    return false;
  }
  const asyncIterator = argument[SymbolAsyncIterator];
  return IsCallable(asyncIterator);
} : () => false;
module.exports = IsAsyncIterable;
