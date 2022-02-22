import {
  AsyncGeneratorFunction,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '@dwlib/primordials';

const IsAsyncGeneratorFunction = AsyncGeneratorFunction ? FunctionBind(FunctionPrototypeSymbolHasInstance, AsyncGeneratorFunction) : () => false;
export default IsAsyncGeneratorFunction;
