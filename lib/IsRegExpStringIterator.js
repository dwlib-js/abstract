'use strict';

const {
  FunctionBind,
  ObjectPrototypeIsPrototypeOf,
  RegExpStringIteratorPrototype
} = require('#primordials');

const IsRegExpStringIterator = RegExpStringIteratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, RegExpStringIteratorPrototype) : () => false;
module.exports = IsRegExpStringIterator;
