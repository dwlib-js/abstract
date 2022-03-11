import {
  AsyncFunction,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '#primordials';

const IsAsyncFunction = AsyncFunction ? FunctionBind(FunctionPrototypeSymbolHasInstance, AsyncFunction) : () => false;
export default IsAsyncFunction;
