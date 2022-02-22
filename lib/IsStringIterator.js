'use strict';

const {
  FunctionBind,
  ObjectPrototypeIsPrototypeOf,
  StringIteratorPrototype
} = require('@dwlib/primordials');

const IsStringIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, StringIteratorPrototype);
module.exports = IsStringIterator;
