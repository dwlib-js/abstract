import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  WeakSet
} from '#primordials';

const IsWeakSet = FunctionBind(FunctionPrototypeSymbolHasInstance, WeakSet);
export default IsWeakSet;
