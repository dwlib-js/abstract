'use strict';

const {
  AsyncGeneratorPrototype,
  FunctionBind,
  ObjectPrototypeIsPrototypeOf
} = require('@dwlib/primordials');

const IsAsyncGenerator = AsyncGeneratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, AsyncGeneratorPrototype) : () => false;
module.exports = IsAsyncGenerator;
