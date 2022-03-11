import {
  FunctionCall,
  SymbolToPrimitive,
  TypeError
} from '#primordials';
import IsObject from './IsObject.mjs';
import GetMethod from './GetMethod.mjs';
import OrdinaryToPrimitive from './OrdinaryToPrimitive.mjs';

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
export default ToPrimitive;
