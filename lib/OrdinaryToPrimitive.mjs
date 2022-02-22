import {
  FunctionCall,
  TypeError
} from '@dwlib/primordials';
import IsCallable from './IsCallable.mjs';
import IsObject from './IsObject.mjs';

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
export default OrdinaryToPrimitive;
