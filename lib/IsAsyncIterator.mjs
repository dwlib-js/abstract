import {
  AsyncIteratorPrototype,
  FunctionBind,
  ObjectPrototypeIsPrototypeOf
} from '@dwlib/primordials';

const IsAsyncIterator = AsyncIteratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, AsyncIteratorPrototype) : () => false;
export default IsAsyncIterator;
