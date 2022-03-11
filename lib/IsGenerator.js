'use strict';

const {
  FunctionBind,
  GeneratorPrototype,
  ObjectPrototypeIsPrototypeOf
} = require('#primordials');

const IsGenerator = FunctionBind(ObjectPrototypeIsPrototypeOf, GeneratorPrototype);
module.exports = IsGenerator;
