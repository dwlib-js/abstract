'use strict';

const {
  FunctionBind,
  MapIteratorPrototype,
  ObjectPrototypeIsPrototypeOf
} = require('@dwlib/primordials');

const IsMapIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, MapIteratorPrototype);
module.exports = IsMapIterator;
