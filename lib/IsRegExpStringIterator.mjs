import {
  FunctionBind,
  ObjectPrototypeIsPrototypeOf,
  RegExpStringIteratorPrototype
} from '#primordials';

const IsRegExpStringIterator = RegExpStringIteratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, RegExpStringIteratorPrototype) : () => false;
export default IsRegExpStringIterator;
