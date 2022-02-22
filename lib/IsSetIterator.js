'use strict';

const {
  FunctionBind,
  ObjectPrototypeIsPrototypeOf,
  SetIteratorPrototype
} = require('@dwlib/primordials');

const IsSetIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, SetIteratorPrototype);
module.exports = IsSetIterator;
