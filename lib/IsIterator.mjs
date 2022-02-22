import {
  FunctionBind,
  IteratorPrototype,
  ObjectPrototypeIsPrototypeOf
} from '@dwlib/primordials';

const IsIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, IteratorPrototype);
export default IsIterator;
