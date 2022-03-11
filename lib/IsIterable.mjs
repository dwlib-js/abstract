import {
  SymbolIterator
} from '#primordials';
import IsCallable from './IsCallable.mjs';

const IsIterable = argument => {
  if (argument == null) {
    return false;
  }
  const iterator = argument[SymbolIterator];
  return IsCallable(iterator);
}
export default IsIterable;
