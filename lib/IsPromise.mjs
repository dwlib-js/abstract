import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  Promise
} from '#primordials';

const IsPromise = FunctionBind(FunctionPrototypeSymbolHasInstance, Promise);
export default IsPromise;
