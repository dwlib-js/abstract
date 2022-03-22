'use strict';

const ReflectApply = require('#primordials/ReflectApply');
const GetV = require('./GetV');

const Invoke = (...args) => {
  const value = args[0];
  const propertyKey = args[1];
  const method = GetV(value, propertyKey);
  const argumentsList = args.length > 2 ? args[2] : [];
  return ReflectApply(method, value, argumentsList);
}

module.exports = Invoke;
