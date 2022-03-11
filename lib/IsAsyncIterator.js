'use strict';

const {
  AsyncIteratorPrototype,
  FunctionBind,
  ObjectPrototypeIsPrototypeOf
} = require('#primordials');

const IsAsyncIterator = AsyncIteratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, AsyncIteratorPrototype) : () => false;
module.exports = IsAsyncIterator;
