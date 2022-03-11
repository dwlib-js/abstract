import {
  FunctionBind,
  ObjectPrototypeIsPrototypeOf,
  SetIteratorPrototype
} from '#primordials';

const IsSetIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, SetIteratorPrototype);
export default IsSetIterator;
