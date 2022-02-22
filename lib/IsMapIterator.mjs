import {
  FunctionBind,
  MapIteratorPrototype,
  ObjectPrototypeIsPrototypeOf
} from '@dwlib/primordials';

const IsMapIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, MapIteratorPrototype);
export default IsMapIterator;
