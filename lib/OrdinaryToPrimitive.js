'use strict';

const {
  FunctionCall,
  TypeError
} = require('#primordials');
const IsCallable = require('./IsCallable');
const IsObject = require('./IsObject');

const OrdinaryToPrimitive = (O, hint) => {
  const methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
  for (let i = 0; i < 2; i++) {
    const methodName = methodNames[i];
    const method = O[methodName];
    if (IsCallable(method)) {
      const result = FunctionCall(method, O);
      if (!IsObject(result)) {
        return result;
      }
    }
  }
  throw new TypeError('Cannot convert object to primitive value');
}
module.exports = OrdinaryToPrimitive;
