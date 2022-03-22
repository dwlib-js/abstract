import GetIntrinsicOrThrow from '#intrinsics/GetIntrinsicOrThrow';
import FunctionCall from '#primordials/FunctionCall';
import TypeError from '#primordials/TypeError';
import IsObject from '#types/isObject';
import GetMethod from './GetMethod.mjs';
import OrdinaryToPrimitive from './OrdinaryToPrimitive.mjs';

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

export default ToPrimitive;
