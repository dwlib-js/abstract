import {
  FunctionBind,
  ObjectPrototypeIsPrototypeOf,
  StringIteratorPrototype
} from '#primordials';

const IsStringIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, StringIteratorPrototype);
export default IsStringIterator;
