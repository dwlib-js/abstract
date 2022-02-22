import {
  AsyncFunction,
  FunctionBind,
  FunctionPrototypeSymbolHasInstance
} from '@dwlib/primordials';

const IsAsyncFunction = AsyncFunction ? FunctionBind(FunctionPrototypeSymbolHasInstance, AsyncFunction) : () => false;
export default IsAsyncFunction;
