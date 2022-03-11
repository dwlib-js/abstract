import {
  AsyncGeneratorPrototype,
  FunctionBind,
  ObjectPrototypeIsPrototypeOf
} from '#primordials';

const IsAsyncGenerator = AsyncGeneratorPrototype ? FunctionBind(ObjectPrototypeIsPrototypeOf, AsyncGeneratorPrototype) : () => false;
export default IsAsyncGenerator;
