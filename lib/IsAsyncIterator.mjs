import {
  AsyncIteratorPrototype,
  FunctionBind,
  ObjectPrototypeIsPrototypeOf
} from '#primordials';

const IsAsyncIterator = AsyncIteratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, AsyncIteratorPrototype) : () => false;
export default IsAsyncIterator;
