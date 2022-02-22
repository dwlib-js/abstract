'use strict';

const {
  FunctionBind,
  GeneratorPrototype,
  ObjectPrototypeIsPrototypeOf
} = require('@dwlib/primordials');

const IsGenerator = FunctionBind(ObjectPrototypeIsPrototypeOf, GeneratorPrototype);
module.exports = IsGenerator;
