import {
  SymbolAsyncIterator
} from '@dwlib/primordials';
import IsObject from './IsObject.mjs';
import IsCallable from './IsCallable.mjs';

const IsAsyncIterable = SymbolAsyncIterator ? argument => {
  if (!IsObject(argument)) {
    return false;
  }
  const asyncIterator = argument[SymbolAsyncIterator];
  return IsCallable(asyncIterator);
} : () => false;
export default IsAsyncIterable;
