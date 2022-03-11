import {
  FunctionBind,
  FunctionPrototypeSymbolHasInstance,
  WeakMap
} from '#primordials';

const IsWeakMap = FunctionBind(FunctionPrototypeSymbolHasInstance, WeakMap);
export default IsWeakMap;
