'use strict';

const {
  FunctionBind,
  MapIteratorPrototype,
  ObjectPrototypeIsPrototypeOf
} = require('#primordials');

const IsMapIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, MapIteratorPrototype);
module.exports = IsMapIterator;
