import {
  FunctionBind,
  ObjectPrototypeIsPrototypeOf,
  SetIteratorPrototype
} from '@dwlib/primordials';

const IsSetIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, SetIteratorPrototype);
export default IsSetIterator;
