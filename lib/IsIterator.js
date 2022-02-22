'use strict';

const {
  FunctionBind,
  IteratorPrototype,
  ObjectPrototypeIsPrototypeOf
} = require('@dwlib/primordials');

const IsIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, IteratorPrototype);
module.exports = IsIterator;
