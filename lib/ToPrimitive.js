'use strict';

const GetIntrinsicOrThrow = require('#intrinsics/GetIntrinsicOrThrow');
const FunctionCall = require('#primordials/FunctionCall');
const TypeError = require('#primordials/TypeError');
const IsObject = require('#types/isObject');
const GetMethod = require('./GetMethod');
const OrdinaryToPrimitive = require('./OrdinaryToPrimitive');

const SymbolToPrimitive = GetIntrinsicOrThrow('@@toPrimitive');

const ToPrimitive = (...args) => {
  const input = args[0];
  if (IsObject(input)) {
    const method = GetMethod(input, SymbolToPrimitive);
    if (method !== undefined) {
      const hint = args.length > 1 ? args[1] : 'default';
      const result = FunctionCall(method, input, hint);
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
