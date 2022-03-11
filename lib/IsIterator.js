'use strict';

const {
  FunctionBind,
  IteratorPrototype,
  ObjectPrototypeIsPrototypeOf
} = require('#primordials');

const IsIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, IteratorPrototype);
module.exports = IsIterator;
