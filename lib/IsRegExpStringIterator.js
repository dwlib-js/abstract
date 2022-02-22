'use strict';

const {
  FunctionBind,
  ObjectPrototypeIsPrototypeOf,
  RegExpStringIteratorPrototype
} = require('@dwlib/primordials');

const IsRegExpStringIterator = RegExpStringIteratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, RegExpStringIteratorPrototype) : () => false;
module.exports = IsRegExpStringIterator;
