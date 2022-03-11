'use strict';

const {
  FunctionBind,
  ObjectPrototypeIsPrototypeOf,
  SetIteratorPrototype
} = require('#primordials');

const IsSetIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, SetIteratorPrototype);
module.exports = IsSetIterator;
