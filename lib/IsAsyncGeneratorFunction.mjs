import {
  AsyncGeneratorFunction,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '#primordials';

const IsAsyncGeneratorFunction = AsyncGeneratorFunction ? FunctionBind(FunctionPrototypeSymbolHasInstance, AsyncGeneratorFunction) : () => false;
export default IsAsyncGeneratorFunction;
