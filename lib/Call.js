'use strict';

const ReflectApply = require('#primordials/ReflectApply');

const Call = (...args) => {
  const target = args[0];
  const thisArg = args[1];
  const argumentsList = args.length > 2 ? args[2] : [];
  return ReflectApply(target, thisArg, argumentsList);
}

module.exports = Call;
