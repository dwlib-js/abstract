import {
  AsyncGeneratorPrototype,
  FunctionBind,
  ObjectPrototypeIsPrototypeOf
} from '@dwlib/primordials';

const IsAsyncGenerator = AsyncGeneratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, AsyncGeneratorPrototype) : () => false;
export default IsAsyncGenerator;
