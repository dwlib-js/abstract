'use strict';

const {
  FunctionCall,
  SymbolToPrimitive,
  TypeError
} = require('#primordials');
const IsObject = require('./IsObject');
const GetMethod = require('./GetMethod');
const OrdinaryToPrimitive = require('./OrdinaryToPrimitive');

const ToPrimitive = (...args) => {
  const [input] = args;
  if (IsObject(input)) {
    const toPrimitive = GetMethod(input, SymbolToPrimitive);
    if (toPrimitive !== undefined) {
      const hint = args.length > 1 ? args[1] : 'default';
      const result = FunctionCall(toPrimitive, input, hint);
      if (!IsObject(result)) {
        return result;
      }
      throw new TypeError('Cannot convert object to primitive value');
    }
    const preferredType = args.length > 1 ? args[1] : 'number';
    return OrdinaryToPrimitive(input, preferredType);
  }
  return input;
}
module.exports = ToPrimitive;
