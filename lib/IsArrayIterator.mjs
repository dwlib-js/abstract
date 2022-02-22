import {
  ArrayIteratorPrototype,
  FunctionBind,
  ObjectPrototypeIsPrototypeOf
} from '@dwlib/primordials';

const IsArrayIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, ArrayIteratorPrototype);
export default IsArrayIterator;
