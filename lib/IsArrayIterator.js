'use strict';

const {
  ArrayIteratorPrototype,
  FunctionBind,
  ObjectPrototypeIsPrototypeOf
} = require('@dwlib/primordials');

const IsArrayIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, ArrayIteratorPrototype);
module.exports = IsArrayIterator;
