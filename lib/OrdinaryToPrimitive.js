'use strict';

const FunctionCall = require('#primordials/FunctionCall');
const TypeError = require('#primordials/TypeError');
const IsCallable = require('#types/isCallable');
const IsObject = require('#types/isObject');

const METHOD_NAMES = ['toString', 'valueOf'];
const REVERSED_METHOD_NAMES = ['valueOf', 'toString'];

const OrdinaryToPrimitive = (object, hint) => {
  const methodNames = hint === 'string' ? METHOD_NAMES : REVERSED_METHOD_NAMES;
  for (let i = 0; i < 2; i++) {
    const methodName = methodNames[i];
    const method = object[methodName];
    if (IsCallable(method)) {
      const result = FunctionCall(method, object);
      if (!IsObject(result)) {
        return result;
      }
    }
  }
  throw new TypeError('Cannot convert object to primitive value');
}

module.exports = OrdinaryToPrimitive;
