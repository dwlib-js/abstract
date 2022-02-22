'use strict';

const {
  SymbolIterator
} = require('@dwlib/primordials');
const IsCallable = require('./IsCallable');

const IsIterable = argument => {
  if (argument == null) {
    return false;
  }
  const iterator = argument[SymbolIterator];
  return IsCallable(iterator);
}
module.exports = IsIterable;
