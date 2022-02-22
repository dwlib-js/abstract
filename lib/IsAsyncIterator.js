'use strict';

const {
  AsyncIteratorPrototype,
  FunctionBind,
  ObjectPrototypeIsPrototypeOf
} = require('@dwlib/primordials');

const IsAsyncIterator = AsyncIteratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, AsyncIteratorPrototype) : () => false;
module.exports = IsAsyncIterator;
