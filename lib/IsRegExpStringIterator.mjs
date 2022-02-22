import {
  FunctionBind,
  ObjectPrototypeIsPrototypeOf,
  RegExpStringIteratorPrototype
} from '@dwlib/primordials';

const IsRegExpStringIterator = RegExpStringIteratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, RegExpStringIteratorPrototype) : () => false;
export default IsRegExpStringIterator;
