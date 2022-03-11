import {
  FunctionBind,
  IteratorPrototype,
  ObjectPrototypeIsPrototypeOf
} from '#primordials';

const IsIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, IteratorPrototype);
export default IsIterator;
