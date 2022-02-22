import {
  FunctionBind,
  ObjectPrototypeIsPrototypeOf,
  StringIteratorPrototype
} from '@dwlib/primordials';

const IsStringIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, StringIteratorPrototype);
export default IsStringIterator;
