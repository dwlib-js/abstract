import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Promise
} from '@dwlib/primordials';

const IsPromise = FunctionBind(FunctionPrototypeSymbolHasInstance, Promise);
export default IsPromise;
