import {
  FunctionBind,
  MapIteratorPrototype,
  ObjectPrototypeIsPrototypeOf
} from '#primordials';

const IsMapIterator = FunctionBind(ObjectPrototypeIsPrototypeOf, MapIteratorPrototype);
export default IsMapIterator;
