import {
  ArrayIteratorPrototype,
  FunctionBind,
  ObjectPrototypeIsPrototypeOf
} from '#primordials';

const IsArrayIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, ArrayIteratorPrototype);
export default IsArrayIterator;
