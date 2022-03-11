'use strict';

const {
  FunctionBind,
  ObjectPrototypeIsPrototypeOf,
  StringIteratorPrototype
} = require('#primordials');

const IsStringIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, StringIteratorPrototype);
module.exports = IsStringIterator;
