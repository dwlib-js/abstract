'use strict';

const {
  ArrayIteratorPrototype,
  FunctionBind,
  ObjectPrototypeIsPrototypeOf
} = require('#primordials');

const IsArrayIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, ArrayIteratorPrototype);
module.exports = IsArrayIterator;
